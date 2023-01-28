import './App.css';
import HeroPage from "./pages/HeroPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <div>
            <HeroPage/>
            <ProjectsPage/>
            {/*<SkillsPage/>*/}
            <ContactPage/>
        </div>
    );
}

export default App;
