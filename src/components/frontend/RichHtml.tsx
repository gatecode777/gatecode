// @ts-nocheck

export default function RichHtml({ html, className }: { html: string; className?: string }) {
  return <div className={['rich-html', className].filter(Boolean).join(' ')} dangerouslySetInnerHTML={{ __html: html }} />;
}
