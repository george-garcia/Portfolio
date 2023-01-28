import './HeroPage.css';
import video from '../public/coverr-young-swans-swim-with-their-mother-2053-1080p.mp4';

function HeroPage() {
    return (
        <div className={"heroPage-video--container"}>
            {/*HeroPage*/}
            <video autoPlay muted loop className={""}>
                <source src={video} type="video/mp4">
                </source>
            </video>
            <div className="overlay"></div>
            <div className="text">
                <div className="black-border">
                    <h2>George Garcia </h2>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="black-border--p">
                    <p>
                        Hi and thank you for visiting my portfolio. My current focus is React, Javascript, and CSS, web development. Currently working as a System Administrator with a lot of Systems, Networking, and PowerShell/Python/Bash scripting experience.
                    </p>
                </div>
                <a href="#">Explore</a>
            </div>

        </div>
    );
}

export default HeroPage;