'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Custom Markdown & Contact Link Parser for bot replies
function parseTextTokens(text: string, boldIdx: number): React.ReactNode[] {
  // Matches emails, Indian phone numbers (+91 XXXXXXXXXX), and standard URLs
  const tokenRegex = /(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b|\+91\s?\d{10}|https?:\/\/[^\s]+)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (part.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      return (
        <a key={`email-${boldIdx}-${idx}`} href={`mailto:${part}`} className="chatbot-link">
          {part}
        </a>
      );
    }
    if (part.match(/^\+91\s?\d{10}$/)) {
      const cleanPhone = part.replace(/\s+/g, '');
      return (
        <a key={`phone-${boldIdx}-${idx}`} href={`tel:${cleanPhone}`} className="chatbot-link">
          {part}
        </a>
      );
    }
    if (part.match(/^https?:\/\/[^\s]+$/)) {
      return (
        <a key={`url-${boldIdx}-${idx}`} href={part} target="_blank" rel="noopener noreferrer" className="chatbot-link">
          {part}
        </a>
      );
    }
    return part;
  });
}

function parseInlineStyles(str: string): React.ReactNode[] {
  // Splitting by **bold** text
  const boldParts = str.split(/(\*\*[^*]+\*\*)/g);

  return boldParts.flatMap((part, boldIdx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={`bold-${boldIdx}`}>{boldText}</strong>;
    }
    return parseTextTokens(part, boldIdx);
  });
}

function formatBotResponse(text: string): React.ReactNode {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];
  let currentListType: 'ol' | 'ul' | null = null;

  const flushList = (keyPrefix: string) => {
    if (currentList.length > 0) {
      if (currentListType === 'ol') {
        elements.push(
          <ol key={`ol-${keyPrefix}`} className="chatbot-ol">
            {currentList}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${keyPrefix}`} className="chatbot-ul">
            {currentList}
          </ul>
        );
      }
      currentList = [];
      currentListType = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      flushList(`empty-${i}`);
      continue;
    }

    // Check for ordered list like "1. ", "2. "
    const olMatch = line.match(/^(\d+)\.\s+(.*)/);
    // Check for unordered list like "- ", "* "
    const ulMatch = line.match(/^([\-*])\s+(.*)/);

    if (olMatch) {
      if (currentListType !== 'ol') {
        flushList(`switch-ol-${i}`);
        currentListType = 'ol';
      }
      currentList.push(
        <li key={`li-ol-${i}`} className="chatbot-li">
          {parseInlineStyles(olMatch[2])}
        </li>
      );
    } else if (ulMatch) {
      if (currentListType !== 'ul') {
        flushList(`switch-ul-${i}`);
        currentListType = 'ul';
      }
      currentList.push(
        <li key={`li-ul-${i}`} className="chatbot-li">
          {parseInlineStyles(ulMatch[2])}
        </li>
      );
    } else {
      flushList(`para-flush-${i}`);
      elements.push(
        <p key={`p-${i}`} className="chatbot-p">
          {parseInlineStyles(line)}
        </p>
      );
    }
  }

  flushList('final');
  return <div className="formatted-bot-response">{elements}</div>;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Gatecode Technologies. I am your AI assistant. How can I help you today? You can ask me about our services, career openings, office contact details, or how to get started!',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, loading, isOpen]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userText = textToSend.trim();
    setMessage('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          // Limit history to last 6 messages to stay efficient
          history: messages.slice(-6),
        }),
      });

      const data = await response.json();
      if (data.success && data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: data.error || 'Sorry, I am having trouble connecting right now. Please try again.' },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Network error. Please check your connection and try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggest = (topic: string) => {
    handleSuggestAsync(topic);
  };

  const handleSuggestAsync = async (topic: string) => {
    await handleSend(topic);
  };

  const suggestions = [
    'What services do you offer?',
    'How do I request a quote?',
    'Are there career openings?',
    'Where is your office?',
  ];

  return (
    <div className="custom-chatbot-root">
      {/* Pulse button trigger */}
      {!isOpen && (
        <button
          className="chatbot-trigger-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open support chat"
        >
          <span className="pulse-glow" />
          <FiMessageSquare className="trigger-icon" />
        </button>
      )}

      {/* Elegant Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="header-info">
              <div className="status-dot-wrapper">
                <span className="status-dot" />
              </div>
              <div>
                <h3>Gatecode AI Assistant</h3>
                <span className="status-text">Online • Standard Support</span>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close support chat"
            >
              <FiX />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-body">
            <div className="messages-container">
              {messages.map((m, idx) => (
                <div key={idx} className={`chat-bubble-wrapper ${m.sender === 'user' ? 'user-wrapper' : 'bot-wrapper'}`}>
                  <div className={`chat-bubble ${m.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                    {m.sender === 'user' ? m.text : formatBotResponse(m.text)}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="chat-bubble-wrapper bot-wrapper">
                  <div className="chat-bubble bot-bubble loading-bubble">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="chatbot-suggestions">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                className="suggestion-chip"
                onClick={() => handleSuggest(s)}
                disabled={loading}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Box Footer */}
          <form
            className="chatbot-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(message);
            }}
          >
            <input
              type="text"
              placeholder="Ask about Gatecode..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
              maxLength={250}
            />
            <button
              type="submit"
              className="send-btn"
              disabled={loading || !message.trim()}
              aria-label="Send message"
            >
              <FiSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
