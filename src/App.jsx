import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Experience from './components/Experience';
import ChefSpecial from './components/ChefSpecial';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Visit from './components/Visit';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Experience />
        <ChefSpecial />
        <Gallery />
        <Reservations />
        <Visit />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
