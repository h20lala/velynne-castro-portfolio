import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyWork from './components/WhyWork';
import Process from './components/Process';
import Services from './components/Services';
import Tools from './components/Tools';
import SampleWorks from './components/SampleWorks';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F5] text-charcoal antialiased selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyWork />
        <Process />
        <Services />
        <Tools />
        <SampleWorks />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
