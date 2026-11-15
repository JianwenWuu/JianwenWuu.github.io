import { Album } from '@/components/Album';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { News } from '@/components/News';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <News />
        <Projects />
        <div className="section">
          <div className="wrap split">
            <Education />
            <Experience />
          </div>
        </div>
        <Album />
      </main>
      <Footer />
    </>
  );
}
