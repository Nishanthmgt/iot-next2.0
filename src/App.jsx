import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeDetails from './components/HomeDetails';
import Basics from './components/Basics';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Sensors from './components/Sensors';
import ProjectDetail from './components/ProjectDetail';
import InteractiveHub from './components/InteractiveHub';
import SetupGuides from './components/SetupGuides';
import Community from './components/Community';
import Cartlist from './components/Cartlist';

function App() {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setView('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setView('projects');
  };

  return (
    <div className="app-container">
      <Navbar
        currentView={view}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
        isScrolled={isScrolled}
      />

      <main>
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            <div id="why"><HomeDetails /></div>
            <div id="community"><Community /></div>
          </>
        )}
        {view === 'basics' && <Basics />}
        {view === 'roadmap' && <Roadmap />}
        {view === 'projects' && <Projects onSelectProject={handleProjectSelect} />}
        {view === 'project-detail' && <ProjectDetail project={selectedProject} onBack={handleBack} />}
        {view === 'sensors' && (
             <>
                <Sensors />
                <SetupGuides />
             </>
        )}
        {view === 'hub' && <InteractiveHub />}
        {view === 'cartlist' && <Cartlist />}
      </main>

      <footer style={{
          textAlign: 'center',
          padding: '3rem',
          marginTop: '4rem',
          borderTop: '1px solid var(--border)',
          color: 'var(--text-muted)',
          fontSize: '0.9rem'
      }}>
          <p>© 2024 IoTnext Education. Open Source Learning.</p>
      </footer>
    </div>
  );
}

export default App;