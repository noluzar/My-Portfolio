import coding from "./assets/Remove-bg.ai_1721814829767.png"

function About() {
    return (
        <div className="container">
            <div className="hero">
                <div className="about">
                    <h1>About-me</h1><hr />
                    <div className="text">
                        <p>Hello, Im Noluthando!</p>
                        <p> I am a front-end developer based in Johannesburg, South Africa.
                            I can develop responsive websites from scratch and raise them into modern
                            user-friendly web experiences
                        </p>
                        <p>I am a 2X graduate with a 3 year National Diploma in Information Technology
                            and an Advanced Diploma in Information Resouces Management.
                            I am very passionate about improving my coding skills &
                            developing applications & websites. I always strive to learn about
                            about the newest technologies and frameworks</p>
                    </div>
                    <img src={coding}></img>
                    <button type="button">Resume</button>
                </div>
            </div>
        </div>
    );
}


export default About