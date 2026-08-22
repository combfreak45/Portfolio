import { HashRouter, Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import FunFactButton from './components/shared/FunFactButton';
import ProjectPage from './pages/ProjectPage';
import { heroData } from './data/hero';
import { experienceData } from './data/experience';
import { projectsData } from './data/projects';
import { educationData } from './data/education';

function Portfolio({ theme, toggleTheme }) {
  return (
    <div id="app" className="min-h-screen bg-white dark:bg-neutral-950 text-slate-900 dark:text-slate-100 font-sans">
      <Navbar id="navbar" theme={theme} onToggle={toggleTheme} resumeUrl={heroData.resumeUrl} name={heroData.name} />
      <main id="main" className="pt-14">
        <Hero id="hero" data={heroData} />
        <div id="divider-experience" className="max-w-3xl mx-auto px-6">
          <div id="divider-experience-line" className="border-t border-slate-100 dark:border-slate-800" />
        </div>
        <Experience id="experience" data={experienceData} />
        <div id="divider-projects" className="max-w-3xl mx-auto px-6">
          <div id="divider-projects-line" className="border-t border-slate-100 dark:border-slate-800" />
        </div>
        <Projects id="projects" data={projectsData} />
        <div id="divider-education" className="max-w-3xl mx-auto px-6">
          <div id="divider-education-line" className="border-t border-slate-100 dark:border-slate-800" />
        </div>
        <Education id="education" data={educationData} />
        <div id="divider-contact" className="max-w-3xl mx-auto px-6">
          <div id="divider-contact-line" className="border-t border-slate-100 dark:border-slate-800" />
        </div>
        <Contact id="contact" />
      </main>
      <FunFactButton id="fun-fact" />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
}
