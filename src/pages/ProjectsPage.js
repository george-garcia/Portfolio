import './ProjectsPage.css';
import Project from "../components/Project";
import helpDeskHeroImage from "../public/HDH-FE.png";
import cyberFortressITImage from "../public/CFIT.png";


function ProjectsPage() {

    /*

    Javascript HTML CSS React Redux Redux Toolkit, Authentication, JSON Webtoken, React
                            Router, Nivo/Pie
     */

    const helpDeskHeroFE = {
        subheading: 'Full-Stack Project // Front-End',
        heading: 'Help Desk Hero',
        tld: '.tech',
        tags: ['React', 'Redux', 'Redux Toolkit', 'Authentication',
            'Json Webtoken', 'React Router', 'Nivo/Pie Charts',
            'Javascript', 'HTML', 'CSS'],

        description: 'Lorem ipsum dolor sit amet, consectetur ' +
            'adipisicing elit. Aspernatur, blanditiis consequuntur ' +
            'corporis cum eligendi esse exercitationem facilis hic iste minus ' +
            'nisi numquam quam quas quisquam quod sed vel voluptate voluptatibus.'
    }

    const helpDeskHeroBE = {
        subheading: 'Full-Stack Project // Back-End',
        heading: 'Help Desk Hero',
        tld: '.live',
        tags: ['Node.js', 'Mongoose', 'Express', 'BCrypt', 'MongoDB Atlas Cloud Database',
            'CORS', 'dotEnv', 'Authentication',
            'Json Webtoken', 'Helmet', 'REST API'],

        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '                            Aspernatur, blanditiis consequuntur\n' +
            '                            corporis cum eligendi esse exercitationem facilis hic iste minus nisi numquam quam quas\n' +
            '                            quisquam quod sed vel voluptate voluptatibus.'
    }

    const cyberFortressIT = {
        subheading: 'Single Page Application',
        heading: 'Cyber Fortress IT',
        tld: '.me',
        tags: ['React', 'Javascript', 'CSS', 'Email Integration'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '                            Aspernatur, blanditiis consequuntur\n' +
            '                            corporis cum eligendi esse exercitationem facilis hic iste minus nisi numquam quam quas\n' +
            '                            quisquam quod sed vel voluptate voluptatibus.'
    }

    return (<div className={"section-projects"}>
        <div className={"container"}>
            <h3 className={"projects-title"}>Projects</h3>
            {/*<img className={"projects-title--svg"} src={underline}/>*/}
            {/*<ReactSVG src={double} className={"projects-title--svg"}/>*/}
            <div className={"projects-container grid grid-2-cols"}>
                <Project
                    subheading={helpDeskHeroFE.subheading}
                    heading={helpDeskHeroFE.heading}
                    tld={helpDeskHeroFE.tld}
                    tags={helpDeskHeroFE.tags}
                    description={helpDeskHeroFE.description}
                />
                <div className={"projects-gifs"}>
                    <img src={helpDeskHeroImage} alt="" className={"animated-gif"}/>
                </div>
            </div>

            <div className={"projects-container grid grid-2-cols"}>
                <Project
                    subheading={helpDeskHeroBE.subheading}
                    heading={helpDeskHeroBE.heading}
                    tld={helpDeskHeroBE.tld}
                    tags={helpDeskHeroBE.tags}
                    description={helpDeskHeroBE.description}
                />
                <div>
                    <h1>Content</h1>
                </div>
            </div>

            <div className={"projects-container grid grid-2-cols"}>
                <Project
                    subheading={cyberFortressIT.subheading}
                    heading={cyberFortressIT.heading}
                    tld={cyberFortressIT.tld}
                    tags={cyberFortressIT.tags}
                    description={cyberFortressIT.description}
                />
                <div className={"projects-gifs"}>
                    <span className="label">Hover to view in action: </span>
                    <img src={cyberFortressITImage} alt="" className={"animated-gif"}/>
                </div>
            </div>
        </div>
    </div>);
}

export default ProjectsPage;