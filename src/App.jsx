import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import "./index.css";
const App = () => {
  return (
    <div className="containor">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#content">
        <Content />
      </section>
    </div>
  );
};

export default App;
