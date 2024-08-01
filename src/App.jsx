import Home from "./Home.jsx"
import About from "./About.jsx"
import Skills from "./skills.jsx";
import Contact from "./contact.jsx";
import Projects from "./projects.jsx";


function App(){
    return(
        <>
        <Home/>
        <section id="about">
            <About/>
        </section>
        <section id="projects">
        <Projects/>
        </section>
        <section id="skills">
            <Skills/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
        </>
    );
}



export default App