import {
  Hero,
  About,
  Skills,
  Abstract1,
  Projects,
  Abstract2,
  Contact,
  Footer,
  TechStack,
} from "./sections";

function App() {
  return (
    <div className="bg-black w-full">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <TechStack />
      </section>
      <section className="hidden lg:block">
        <Abstract1 />
      </section>
      <section>
        <Projects />
      </section>
      <section className="hidden lg:block">
        <Abstract2 />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
