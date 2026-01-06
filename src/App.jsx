import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from './lib/supabase';
// Core Components (Statically loaded for initial view)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeDetails from './components/HomeDetails';
import { ArrowUp } from 'lucide-react';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import OnboardingTour from './components/OnboardingTour';
import BackToTop from './components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Lazy Loaded Components
const Roadmap = lazy(() => import('./components/Roadmap'));
const Projects = lazy(() => import('./components/Projects'));
const Sensors = lazy(() => import('./components/Sensors'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const ShareProject = lazy(() => import('./components/ShareProject'));
const SetupGuides = lazy(() => import('./components/SetupGuides'));
const BlynkIoT = lazy(() => import('./components/BlynkIoT'));
const Community = lazy(() => import('./components/Community'));
const PinoutLab = lazy(() => import('./components/PinoutLab'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));
const Blog = lazy(() => import('./components/Blog'));
const About = lazy(() => import('./components/About'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const Reviews = lazy(() => import('./components/Reviews'));
const ReviewsPage = lazy(() => import('./components/ReviewsPage'));
const SearchPalette = lazy(() => import('./components/SearchPalette'));
const BoardFamilySelector = lazy(() => import('./components/BoardFamilySelector'));
const QA = lazy(() => import('./components/QA'));
const CProgrammingCourse = React.lazy(() => import('./components/CProgrammingCourse'));
const Cartlist = lazy(() => import('./components/Cartlist'));

// Admin Components (Lazy Loaded)
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const ProjectForm = lazy(() => import('./components/admin/ProjectForm'));
const SensorForm = lazy(() => import('./components/admin/SensorForm'));
const BoardForm = lazy(() => import('./components/admin/BoardForm'));
import { projects as localProjects } from './data/projects';
import { ToastProvider } from './context/ToastContext';

const LoadingFallback = () => (
  <div style={{
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--background)',
    color: 'var(--primary)',
    gap: '1.5rem'
  }}>
    <div className="iot-loader">
      <div className="iot-loader-inner"></div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', marginBottom: '0.5rem' }}>IoTnext</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase' }}>Stay Connected.</div>
    </div>
  </div>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('iotnext_theme') || 'dark');
  const [showIntro, setShowIntro] = useState(true);
  const [showTour, setShowTour] = useState(false);
  const [buildList, setBuildList] = useState(() => {
    const saved = localStorage.getItem('iotnext_build_list');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [editingSensor, setEditingSensor] = useState(null);
  const [editingBoard, setEditingBoard] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeFamily, setActiveFamily] = useState('all');

  const handleIntroComplete = () => {
    setShowIntro(false);
    const hasVisited = localStorage.getItem('iotnext_tour_complete');
    if (!hasVisited) {
      setTimeout(() => setShowTour(true), 1500);
    }
  };

  // Expose setEditingBoard globally for AdminDashboard to use (shortcut)
  useEffect(() => {
    window.setEditingBoard = setEditingBoard;
  }, []);

  // Authentication Persistence
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const isAdminRole = session?.user?.user_metadata?.role === 'admin';
      const isAuthorizedEmail = session?.user?.email === 'mnishanth279@gmail.com';

      setCurrentUser(session?.user || null);

      if (isAdminRole || isAuthorizedEmail) {
        setIsAdmin(true);
      }
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user || null;
      const isAdminRole = user?.user_metadata?.role === 'admin';
      const isAuthorizedEmail = user?.email === 'mnishanth279@gmail.com';

      setIsAdmin(isAdminRole || isAuthorizedEmail);
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setShowTour(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      subscription.unsubscribe();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hash Routing Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash.startsWith('project/')) {
          const idParam = hash.split('/')[1];
          const project = localProjects.find(p => p.id.toString() === idParam);
          if (project) {
            setSelectedProject(project);
            setView('project-detail');
          } else {
            if (selectedProject && selectedProject.id.toString() === idParam) {
              setView('project-detail');
            } else {
              setView('projects');
            }
          }
        } else if (hash.startsWith('pinout/family/')) {
          const familyId = hash.split('/')[2];
          setActiveFamily(familyId);
          setView('pinout');
        } else {
          setActiveFamily('all');
          setView(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [selectedProject]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('iotnext_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('iotnext_build_list', JSON.stringify(buildList));
  }, [buildList]);

  const addToBuild = (projectId) => {
    if (!buildList.includes(projectId)) {
      setBuildList(prev => [...prev, projectId]);
    }
  };

  const removeFromBuild = (projectId) => {
    setBuildList(prev => prev.filter(id => id !== projectId));
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setView('project-detail');
    window.location.hash = `project/${project.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setView('projects');
    window.location.hash = 'projects';
  };

  const handleViewChange = (newView) => {
    setView(newView);
    window.location.hash = newView;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <ToastProvider>
      <div className="app-container">
        {/* Global Background Elements - Completely removed from DOM on mobile to eliminate glitches */}
        {!isMobile && (
          <div className="global-bg-wrapper">
            <div className="global-grid" />
            <div className="global-glow glow-1" />
            <div className="global-glow glow-2" />
          </div>
        )}
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence>
            {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
          </AnimatePresence>

          <Navbar
            currentView={view}
            setView={handleViewChange}
            theme={theme}
            toggleTheme={toggleTheme}
            setIsSearchOpen={setIsSearchOpen}
            buildList={buildList}
          />

          <main>
            {view === 'home' && (
              <>
                <Hero setView={handleViewChange} />
                <div id="why"><HomeDetails /></div>
                <Reviews theme={theme} setView={handleViewChange} />
                <Community />
              </>
            )}
            {view === 'roadmap' && <Roadmap setView={handleViewChange} />}
            {view === 'c-course' && <CProgrammingCourse onBack={() => handleViewChange('roadmap')} />}
            {view === 'projects' && (
              <Projects
                onSelectProject={handleProjectSelect}
                onAddToBuild={addToBuild}
                onRemoveFromBuild={removeFromBuild}
                buildList={buildList}
                setView={handleViewChange}
              />
            )}
            {view === 'share-project' && <ShareProject setView={handleViewChange} />}
            {view === 'project-detail' && (
              <ProjectDetail
                project={selectedProject}
                onBack={handleBack}
                onAddToBuild={addToBuild}
                onRemoveFromBuild={removeFromBuild}
                isInBuild={selectedProject && buildList.includes(selectedProject.id)}
                onNext={() => {
                  const currentIndex = localProjects.findIndex(p => p.id === selectedProject.id);
                  const nextIndex = (currentIndex + 1) % localProjects.length;
                  handleProjectSelect(localProjects[nextIndex]);
                }}
                onPrev={() => {
                  const currentIndex = localProjects.findIndex(p => p.id === selectedProject.id);
                  const prevIndex = (currentIndex - 1 + localProjects.length) % localProjects.length;
                  handleProjectSelect(localProjects[prevIndex]);
                }}
              />
            )}
            {view === 'sensors' && (
              <>
                <Sensors isAdmin={isAdmin} setEditingSensor={setEditingSensor} setView={handleViewChange} />
                <SetupGuides />
              </>
            )}
            {view === 'blynk-iot' && <BlynkIoT />}
            {view === 'pinout' && <PinoutLab initialFamily={activeFamily} />}
            {view === 'cartlist' && <Cartlist buildList={buildList} onRemoveFromBuild={removeFromBuild} />}
            {view === 'blog' && <Blog />}
            {view === 'qa' && <QA />}
            {view === 'privacy' && <PrivacyPolicy setView={handleViewChange} />}
            {view === 'terms' && <TermsOfService setView={handleViewChange} />}
            {view === 'about' && <About setView={handleViewChange} />}
            {view === 'reviews-page' && <ReviewsPage setView={handleViewChange} isAdmin={isAdmin} />}


            {/* Admin Routes */}
            {view === 'admin-login' && (
              <AdminLogin setView={handleViewChange} setIsAdmin={setIsAdmin} />
            )}
            {view === 'admin-dashboard' && isAdmin && (
              <AdminDashboard
                setView={handleViewChange}
                setEditingProject={setEditingProject}
                setEditingSensor={setEditingSensor}
                setEditingBoard={setEditingBoard}
              />
            )}
            {(view === 'admin-add' || view === 'admin-edit') && isAdmin && (
              <ProjectForm
                setView={handleViewChange}
                project={editingProject}
              />
            )}
            {(view === 'admin-sensor-add' || view === 'admin-sensor-edit') && isAdmin && (
              <SensorForm
                setView={handleViewChange}
                sensor={editingSensor}
              />
            )}
            {(view === 'admin-board-add' || view === 'admin-board-edit') && isAdmin && (
              <BoardForm
                setView={handleViewChange}
                board={editingBoard}
              />
            )}
          </main>

          {!isMobile && <Footer setView={handleViewChange} />}

          <AIAssistant />
          <OnboardingTour isOpen={showTour} onComplete={() => setShowTour(false)} />
          <SearchPalette
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            setView={handleViewChange}
            onSelectProject={handleProjectSelect}
          />

          <BackToTop />
          <SpeedInsights />
          <Analytics />
        </Suspense>
      </div>
    </ToastProvider>
  );
}

export default App;
