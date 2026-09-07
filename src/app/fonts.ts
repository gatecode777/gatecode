import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Castoro_Titling,
  Roboto_Flex,
  Inter,
  Arimo,
  Playfair_Display,
} from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const castoroTitling = Castoro_Titling({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-castoro',
  display: 'swap',
});

export const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-arimo',
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
});
