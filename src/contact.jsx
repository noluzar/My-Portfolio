import discord from "./assets/discord.svg"
import email from "./assets/mail.png"

function Contact() {
    return (

        <div className="container">
            <div className="hero">
                <div className="contact">
                    <h1>Contacts</h1>
                    <hr />
                    <div className="contact-text">
                        <p>I am interested in intern/junior opportunities. However, if
                            you have a project that you would like to discuss or any other
                            request/question, dont hesitate to contact me.
                        </p>
                    </div>
                    <div className="contact-info">
                        <h2>Message me here</h2>
                        <p><img src={discord}></img> noluthandounderscore</p>
                        <p><img src={email}></img> noluthandosamantha.ns@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact