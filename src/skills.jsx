import html from "./assets/html-5.png"
import CSS from "./assets/social.png"
import JavaScript from "./assets/js.png"
import React from "./assets/atom.png"
import Node from "./assets/programing.png"
import Git from "./assets/social (1).png"
import Python from "./assets/python.png"
import Java from "./assets/java.png"
import php from "./assets/php.png"
import sql from "./assets/mysql.png"

function Skills() {
    return (
        <div className="container">
            <div className="hero">
                <div className="skills-container">
                    <h1 className="skills">Skills</h1><hr className="line-skills" />
                    <div className="card-container">
                        <div className="card">
                            <img src={html}></img>
                            <h2>HTML</h2>
                        </div>
                        <div className="card">
                            <img src={CSS}></img>
                            <h2>CSS</h2>
                        </div>
                        <div className="card">
                            <img src={JavaScript}></img>
                            <h2>JavaScript</h2>
                        </div>
                        <div className="card">
                            <img src={React}></img>
                            <h2>React</h2>
                        </div>
                        <div className="card">
                            <img src={Node}></img>
                            <h2>node js</h2>
                        </div>
                        <div className="card">
                            <img src={Git}></img>
                            <h2>Git</h2>
                        </div>
                        <div className="card">
                            <img src={sql}></img>
                            <h2>MySql</h2>
                        </div>
                        <div className="card">
                            <img src={Python}></img>
                            <h2>Python</h2>
                        </div>
                        <div className="card">
                            <img src={Java}></img>
                            <h2>Java</h2>
                        </div>
                        <div className="card">
                            <img src={php}></img>
                            <h2>PHP</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills