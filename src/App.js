import { Navbar, Home, About, Services, Skills, Contact, Projects } from "./components";

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      </>
  )
}

export default App;
