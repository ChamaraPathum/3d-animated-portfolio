import Content from "./components/content/Content";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="">
      <Hero />
      <Services />
      <Portfolio />
      <Content />
    </div>
  );
};

export default App;
