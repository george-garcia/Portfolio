import './ProjectsPage.css'
import Project from '../components/Project'
import helpDeskHeroImage from '../public/HDH-FE.png'
import cyberFortressITImage from '../public/CFIT.png'
import portfolioImage from '../public/portfolio-img.png'

function ProjectsPage () {
  /*

    Javascript HTML CSS React Redux Redux Toolkit, Authentication, JSON Webtoken, React
                            Router, Nivo/Pie
     */

  const helpDeskHeroFE = {
    subheading: 'Full-Stack Project // Front-End',
    heading: 'Help Desk Hero',
    tld: '.georgegarciadev.com',
    tags: [
      'React',
      'Redux',
      'Redux Toolkit',
      'Authentication',
      'Json Webtoken',
      'React Router',
      'Nivo/Pie Charts',
      'Javascript',
      'HTML',
      'CSS'
    ],
    siteLink: 'https://helpdeskhero.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/Ticketing-tool-client',

    description:
      'This is a Full-Stack IT Ticketing System for tracking issues/errors/bugs. It allows a user to sign in with their email and create tickets for the issues they have. Techs can then view these issues, assign them, and work them. Each user has a dashboard that tracks all open tickets, tickets they are assigned, and more. User, Ticket, and Authentication data is collected by querrying the appropriate API route from our Back-End project listed below this one. '
  }

  const helpDeskHeroBE = {
    subheading: 'Full-Stack Project // Back-End',
    heading: 'Help Desk Hero',
    tld: '.localhost',
    tags: [
      'Node.js',
      'Mongoose',
      'Express',
      'BCrypt',
      'MongoDB Atlas Cloud Database',
      'CORS',
      'dotEnv',
      'Authentication',
      'Json Webtoken',
      'Helmet',
      'REST API'
    ],
    siteLink: 'https://helpdeskhero.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/Ticketing-tool-server',

    description:
      'This is a Rest API for the HelpDeskHero project. Data is stored and retrieved from our Atlas Cloud Mongo Database. Routes are protected using JSON Webtokens. This API allows us to create and save users and tickets. Tickets can have Title, Description, Status, Assigned, Priority, and Impact Properties. Users are also able to save their comments to their tickets to show their ongoing work.'
  }

  const cyberFortressIT = {
    subheading: 'Single Page Application',
    heading: 'Cyber Fortress IT',
    tld: '.georgegarciadev.com',
    tags: ['React', 'Javascript', 'CSS', 'Email Integration'],
    siteLink: 'https://cyberfortressit.georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/tech-website-cluster',
    description:
      'CyberFortressIT is a Managed Technology Service Provider mock website. It offers 4 categories of technology solutions: Cloud, Data, Application, and Cyber. This page is designed to be a marketing website for a company that offers these solutions to its client.'
  }
  const portfolio = {
    subheading: 'Single Page Application',
    heading: 'George Garcia Dev',
    tld: '.com',
    tags: ['React', 'Javascript', 'CSS', 'Email Integration'],
    siteLink: 'https://georgegarciadev.com',
    gitLink: 'https://github.com/george-garcia/Portfolio',
    description:
      'I developed this site with the idea to use a nice full screen video as the hero page. After narrowing down a few choices I decided on the serene duck family. It gives the portfolio a vey calm and earthy personality so I decided to theme my website around that with the shades of green and brown to match the video.'
  }

  return (
    <div className={'section-projects'}>
      <div className={'container'}>
        <h3 className={'projects-title'}>Projects</h3>
        {/*<img className={"projects-title--svg"} src={underline}/>*/}
        {/*<ReactSVG src={double} className={"projects-title--svg"}/>*/}
        <div className={'projects-container grid grid-2-cols'}>
          <Project
            subheading={helpDeskHeroFE.subheading}
            heading={helpDeskHeroFE.heading}
            tld={helpDeskHeroFE.tld}
            tags={helpDeskHeroFE.tags}
            description={helpDeskHeroFE.description}
            siteLink={helpDeskHeroFE.siteLink}
            gitLInk={helpDeskHeroFE.gitLink}
          />
          <div className={'projects-gifs'}>
            <span className='label'>Hover for preview: </span>
            <img src={helpDeskHeroImage} alt='' className={'animated-gif'} />
          </div>
        </div>

        <div className={'projects-container grid grid-2-cols'}>
          <Project
            subheading={helpDeskHeroBE.subheading}
            heading={helpDeskHeroBE.heading}
            tld={helpDeskHeroBE.tld}
            tags={helpDeskHeroBE.tags}
            description={helpDeskHeroBE.description}
            siteLink={helpDeskHeroBE.siteLink}
            gitLInk={helpDeskHeroBE.gitLink}
          />
          <div className={'projects-backEnd--container'}>
            <div className='projects-backEnd'>
              <p className='label'>Authentication Route: /api/v1/auth</p>
              <p className={'projects-description mb-2'}>
                We can Create users and login by <strong>POST</strong>ing to
                this route. Passwords are hashed before they are stored using
                bcrypt, and Authentication is handled via JSON Webtokens.
              </p>

              <p className='label'>Tickets Route: /api/v1/tickets</p>
              <p className={'projects-description mb-2'}>
                We can fetch multiple users or one users data via{' '}
                <strong>GET</strong> requests. Update tickets with{' '}
                <strong>PATCH</strong>. Create tickets with{' '}
                <strong>POST</strong>, and delete a ticket with{' '}
                <strong>DEL</strong>.
              </p>

              <p className='label'>Users Route: /api/v1/users</p>
              <p className={'projects-description mb-2'}>
                Retrieving our user data comes from the <strong>GET</strong>{' '}
                request. Updating users can be done via <strong>PATCH</strong>.
                Then finally we can delete users with a <strong>DEL</strong>{' '}
                request.
              </p>

              <p className='label'>Data Relationships:</p>
              <p className={'projects-description mb-2'}>
                <strong>One</strong> user may have <strong>many</strong> tickets
                assigned to them while <strong>one</strong> ticket can only have{' '}
                <strong>one</strong> user.
              </p>
            </div>
          </div>
        </div>

        <div className={'projects-container grid grid-2-cols'}>
          <Project
            subheading={cyberFortressIT.subheading}
            heading={cyberFortressIT.heading}
            tld={cyberFortressIT.tld}
            tags={cyberFortressIT.tags}
            description={cyberFortressIT.description}
            siteLink={cyberFortressIT.siteLink}
            gitLInk={cyberFortressIT.gitLink}
          />
          <div className={'projects-gifs'}>
            <span className='label'>Hover for preview: </span>
            <img src={cyberFortressITImage} alt='' className={'animated-gif'} />
          </div>
        </div>

        <div className={'projects-container grid grid-2-cols'}>
          <Project
            subheading={portfolio.subheading}
            heading={portfolio.heading}
            tld={portfolio.tld}
            tags={portfolio.tags}
            description={portfolio.description}
            siteLink={portfolio.siteLink}
            gitLInk={portfolio.gitLink}
          />
          <div className={'projects-gifs'}>
            <span className='label'>Hover for preview: </span>
            <img src={portfolioImage} alt='' className={'animated-gif'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
