import {
  Hero,
  About,
  Skills,
  Abstract1,
  Projects,
  // Testimonials,
  Abstract2,
  Contact,
  Footer,
} 
  from "./sections";

function App() {
  return (
    <div className="bg-black scroll-smooth w-full">
      <section className="">
        <Hero/>
      </section>
      <section className="">
        <About/>
      </section>
      <section className="">
        <Skills/>
      </section>
      <section className="">
        <Abstract1/>
      </section>
      <section className="">
        <Projects/>
      </section>
      {/* <section className="">
        <Testimonials/>
      </section> */}
      <section className="">
        <Abstract2/>
      </section>
      <section className="">
        <Contact/>
      </section>
      <section className="">
        <Footer/>
      </section>
      </div>
  );
}

export default App;
