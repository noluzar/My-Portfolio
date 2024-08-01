import picture from "./assets/picture.png"
//import { FaGithub } from 'react-icons/fa';
//import { FaLinkedin } from 'react-icons/fa';
//import { FaPinterest } from 'react-icons/fa';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    return (
        <div className="container">
            <div className="hero">
                <header>
                    <nav>
                        <h1>Noluthando<span>.</span></h1> 
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#resume">Resume</a></li>
                        </ul>
                        <button className="hire-me" type="button">Hire me!</button>
                    </nav>
                </header>
                <hr className="line"></hr>
                <div className="hero-text">
                    <img src={picture}></img>
                    <h1>Im Noluthando, a</h1>
                    <h1>Full-stack Developer</h1>
                    <p>I design web apps to turn your ideas into reality.</p>
                    <button className="get-in-touch">Get in touch</button>
                    <hr className="button-line"></hr>
                    {/* <p>Lets connect! -</p> */}
                </div>
            </div>
        </div>
    );
}

export default Home