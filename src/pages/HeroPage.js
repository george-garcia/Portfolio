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

            {/*<div className="content">*/}
            {/*    <h1>Heading</h1>*/}
            {/*    <p>Lorem ipsum...</p>*/}
            {/*    <button id="myBtn" >Pause</button>*/}
            {/*</div>*/}
            <div className="text">
                <div className="black-border">
                    <h2>George Garcia </h2>
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="black-border--p">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                </div>
                <a href="#">Explore</a>
            </div>

        </div>
    );
}

export default HeroPage;