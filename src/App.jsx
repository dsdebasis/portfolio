import Hero from "./components/Hero/Hero.jsx"
import Nav from "./components/Nav/Nav.jsx"
import SkillCard from "./components/Skills/SkillCard.jsx"
import Tech from "./components/Skills/Tech.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"

function App() {

  return (
    <section className="grid gap-y-[15vh]  ">
      <Nav />
      <Hero/>
      <SkillCard/>
      <About/>
      <Tech/>
      <Contact/>
    </section>
  )
}

export default App
