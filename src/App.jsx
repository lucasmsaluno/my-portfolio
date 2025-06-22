import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Projects</a></li>
          { /*<li><a href="#contact">Contact</a></li>*/ }
        </ul>
      </nav>
    </header>
      <Hero />
      <About />
      <Projects />
      { /* <Experiences /> */ }
      { /*<Testimonial />*/ }
      { /*<Contact />*/ }
      <Footer/>
    </div>
  );
};

export default App;
