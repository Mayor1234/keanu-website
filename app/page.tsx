import News from '@/components/News';
import Posts from '@/components/Posts';
import { Gallery } from '@/components/gallery/Gallery';
import Hero from '@/components/hero/HeroBanner';
import RecentMovies from '@/components/recentMovies/RecentMovies';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Gallery />
      <RecentMovies />
    </main>
  );
}
