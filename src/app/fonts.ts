import {
  Plus_Jakarta_Sans,
  Castoro_Titling,
  Roboto_Flex,
  Inter,
  Arimo,
} from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: false,
});

export const castoroTitling = Castoro_Titling({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-castoro',
  display: 'swap',
  preload: true,
});

export const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
  display: 'swap',
  preload: false,
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
});

export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-arimo',
  display: 'swap',
  preload: false,
});

