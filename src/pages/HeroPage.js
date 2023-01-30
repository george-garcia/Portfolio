import './HeroPage.css';
import video from '../public/coverr-young-swans-swim-with-their-mother-2053-1080p.mp4';
import resume from '../public/George_Garcia_Resume_Software_Engineer.pdf';
import githubLogo from '../public/logos/GitHub_Logo_White.png';

function HeroPage() {
    return (
        <div className={"heroPage-video--container"}>
            {/*HeroPage*/}
            {/*<h1>Test</h1>*/}
            <header>
                <h2 className="logo">
                    <a className={"logo-link"} href="https://github.com/george-garcia" target={"_blank"}>
                        <img src={githubLogo} alt=""/>
                    </a>
                </h2>
                <div className="toggle">
                    <a className={"resume"} href={resume} download>Resume</a>
                </div>
            </header>
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
                        Hi and thank you for visiting my portfolio. My current focus is React, Javascript, and CSS, web
                        development. Currently working as a System Administrator with Systems, Networking, and
                        PowerShell/Python/Bash scripting experience.
                    </p>
                </div>
                {/*<a href="#">Explore</a>*/}
            </div>

        </div>
    );
}

export default HeroPage;