import picture from "./assets/projects.webp"

function Projects() {
    return (
        <div className="container">
            <div className="hero">
                <div className="projects">
                    <h1>Projects</h1><hr />
                    <div className="projects-card">
                        <img src={picture}></img>
                        <p>HTML CSS PHP MySQL</p><hr />
                        <h2>Survey App</h2>
                        <p>A surveying application</p>
                        <button type="button">view project</button>
                    </div>
                    <div className="projects-card">
                        <img src={picture}></img>
                        <p>HTML CSS JS</p><hr />
                        <h2>Calculator</h2>
                        <p>Basic phone calculator</p>
                        <button type="button">view project</button>
                    </div>
                    <div className="projects-card">
                        <img src={picture}></img>
                        <p>React CSS</p><hr />
                        <h2>Dronoticz</h2>
                        <p>React website</p>
                        <button type="button">view project</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects