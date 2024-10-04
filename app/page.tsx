import Image from "next/image";
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        {/* Andere Komponenten oder Inhalte */}
      </main>
    </>
  )
}
