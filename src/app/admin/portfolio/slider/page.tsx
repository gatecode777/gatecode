import type { Metadata } from 'next';
import SliderCMS from '@/components/admin/portfolio/SliderCMS';

export const metadata: Metadata = { title: 'Slider' };

export default function SliderPage() {
  return <SliderCMS />;
}
