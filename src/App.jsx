import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { supabase } from './lib/supabase';
// Core Components (Statically loaded for initial view)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileHome from './components/mobile/MobileHome';
import HomeDetails from './components/HomeDetails';
import { ArrowUp, Bell } from 'lucide-react';
import Footer from './components/Footer';
import OnboardingTour from './components/OnboardingTour';
import BackToTop from './components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { projects as localProjects } from './data/projects';
import projectSlugs from './data/project-slugs.json';
import { ToastProvider } from './context/ToastContext';
import { HelmetProvider } from 'react-helmet-async';
import { useDashboardData, logActivity } from './hooks/useDashboardData';

// Hash-to-Pathname Redirect (runs immediately, before React)
(() => {
  const hash = window.location.hash;
  if (!hash) return;

  const hashToPathMap = {
    '#home': '/',
    '#projects': '/projects',
    '#pinout': '/pinout',
    '#sensors': '/sensors',
    '#roadmap': '/roadmap',
    '#about': '/about',
    '#qa': '/qa',
    '#privacy': '/privacy',
    '#terms': '/terms',
    '#share-project': '/share-project',
    '#cartlist': '/cartlist',
    '#community': '/community',
    '#blog': '/blog',
    '#mastery': '/mastery',
    '#c-course': '/c-course',
    '#simulator': '/simulator',
    '#reviews': '/reviews',
    '#admin-login': '/admin/login',
    '#admin': '/admin/login'
  };

  const cleanPath = hashToPathMap[hash];
  if (cleanPath) {
    window.location.replace(cleanPath);
    return;
  }

  const hashRoute = hash.replace('#', '');
  if (hashRoute.startsWith('project/')) {
    window.location.replace(`/project/${hashRoute.split('/')[1]}`);
    return;
  }
  if (hashRoute.startsWith('pinout/family/')) {
    window.location.replace(`/pinout/family/${hashRoute.split('/')[2]}`);
  }
})();

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
import Simulator from './components/simulator/Simulator';

// Admin Components (Lazy Loaded)
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const ProjectForm = lazy(() => import('./components/admin/ProjectForm'));
const SensorForm = lazy(() => import('./components/admin/SensorForm'));
const BoardForm = lazy(() => import('./components/admin/BoardForm'));
const MasteryHub = lazy(() => import('./components/MasteryHub'));

// Mobile App Components
import MobileTopBar from './components/mobile/MobileTopBar';
import MobileBottomNav from './components/mobile/MobileBottomNav';
import AppDashboard from './components/mobile/AppDashboard';
import DesktopDashboard from './components/DesktopDashboard';
import Login from './components/Login'; // Static Import
const Settings = lazy(() => import('./components/Settings'));
// const Login = lazy(() => import('./components/Login'));

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

/* Main App Component */
const App = () => {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Enhanced mobile detection that handles "Request Desktop Site" in Chrome
  const checkIsMobile = () => {
    // Primary check: Touch capability (most reliable for mobile devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Secondary check: Screen size (mobile screens are typically <= 820px)
    const isSmallScreen = window.innerWidth <= 820 || window.innerHeight <= 820;

    // Tertiary check: User agent (can be spoofed by "Desktop site" option)
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());

    // If device has touch AND small screen, it's definitely mobile (even if UA says desktop)
    if (isTouchDevice && isSmallScreen) return true;

    // If UA says mobile, trust it
    if (isMobileDevice) return true;

    // Otherwise, it's desktop
    return false;
  };

  const [isMobile, setIsMobile] = useState(checkIsMobile());

  // Safe Access to Hook Data
  const dashboardData = useDashboardData();
  const isAuthenticated = dashboardData?.isAuthenticated || false;
  const userAvatar = dashboardData?.userAvatar || null;
  const userName = dashboardData?.userName || 'Engineer';

  // console.log('App Debug: isAuthenticated =', isAuthenticated, 'isMobile =', isMobile, 'View =', view);

  useEffect(() => {
    const handleResize = () => setIsMobile(checkIsMobile());
    window.addEventListener('resize', handleResize);

    // Auth Listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // Only redirect if explicitly on the login page or if we are effectively at root (view is home but might need dashboard)
        // But for safety, let's limit to login view to avoid redirect loops
        // Auto-redirect if already at home and logged in
        if (view === 'login' || (view === 'home' && isMobile)) {
          setView('dashboard');
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
      if (event === 'SIGNED_OUT') {
        setView('login');
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      authListener.subscription.unsubscribe();
    };
  }, [view]);

  // Back button handler for mobile top bar
  const handleBack = () => {
    if (view === 'project-detail') {
      setView('projects');
      setSelectedProject(null);
      window.history.pushState({ view: 'projects' }, '', '/projects');
    } else if (view.startsWith('pinout')) {
      setView('pinout');
      window.history.pushState({ view: 'pinout' }, '', '/pinout');
    } else {
      setView('home');
      window.history.pushState({ view: 'home' }, '', '/');
    }
  };

  const getTitleForView = (v) => {
    if (v === 'home') return 'IoTNext';
    if (v === 'dashboard') return 'My Dashboard';
    if (v === 'roadmap') return 'Roadmap';
    if (v === 'projects') return 'Projects';
    if (v === 'sensors') return 'Hardware Registry';
    if (v === 'pinout') return 'Pinout Lab';
    if (v === 'mastery') return 'Mastery Path';
    if (v === 'c-course') return 'C Programming';
    if (v === 'simulator') return 'Simulator';
    if (v === 'blog') return 'Blog';
    if (v === 'about') return 'About Us';
    if (v === 'qa') return 'Q&A';
    if (v === 'privacy') return 'Privacy Policy';
    if (v === 'terms') return 'Terms of Service';
    if (v === 'reviews-page') return 'Reviews';
    if (v === 'cartlist') return 'Build List';
    if (v === 'share-project') return 'Share Project';
    if (v === 'assistant') return 'Nexus AI';
    if (v === 'project-detail' && selectedProject) return selectedProject.title;
    return 'IoTNext';
  };
  const [theme, setTheme] = useState(() => localStorage.getItem('iotnext_theme') || 'dark');
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
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeFamily, setActiveFamily] = useState('all');
  // Onboarding Tour Trigger (Simplified)
  useEffect(() => {
    const hasVisited = localStorage.getItem('iotnext_tour_complete');
    if (!hasVisited) {
      setTimeout(() => setShowTour(true), 2500);
    }
  }, []);

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

  // Pathname-based Routing Logic
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname.replace(/^\/+/, ''); // Clean leading slashes
      const hash = window.location.hash.replace('#', '');

      // Prioritize pathname for state, hash is only for legacy fallback
      const route = path || hash;

      // Handle empty hash edge case (root)
      if (window.location.hash === '#' && !path) {
        // If we are at root with empty hash, do nothing (stay at home) 
        // OR if logged in, we might want dashboard.
        // But let's check auth status in the main App render or another effect.
      }

      if (route) {
        if (route.startsWith('project/')) {
          const param = route.split('/')[1];

          // Check if param is a slug or numeric ID
          let projectId = param;
          if (isNaN(param)) {
            // It's a slug, convert to ID
            projectId = projectSlugs[param];
          }

          const project = localProjects.find(p => p.id.toString() === projectId);
          if (project) {
            setSelectedProject(project);
            setView('project-detail');
          } else {
            if (selectedProject && selectedProject.id.toString() === projectId) {
              setView('project-detail');
            } else {
              setView('projects');
            }
          }
        } else if (route.startsWith('pinout/family/')) {
          const familyId = route.split('/')[2];
          setActiveFamily(familyId);
          setView('pinout');
        } else {
          setActiveFamily('all');
          // Map special paths like admin/login to internal view name
          if (route === 'admin/login') {
            setView('admin-login');
          } else {
            setView(route);
          }
        }
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();

    return () => window.removeEventListener('popstate', handleRouteChange);
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

    // Use project slug if available, otherwise fallback to ID
    const projectSlug = projectSlugs ? Object.keys(projectSlugs).find(key => projectSlugs[key] === project.id.toString()) : null;
    const finalSlug = projectSlug || project.id;

    window.history.pushState({ view: 'project-detail', id: project.id }, '', `/project/${finalSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showOnlySaved, setShowOnlySaved] = useState(false);

  const handleViewChange = (newView, options = {}) => {
    setView(newView);

    // Handle filter state - only reset if explicitly navigating away or if options say so
    if (options.showOnlySaved !== undefined) {
      setShowOnlySaved(options.showOnlySaved);
    } else if (!newView.startsWith('project-') && !newView.startsWith('sensor-') && !newView.startsWith('board-')) {
      // Reset filter when changing to different top-level views
      // But keep filter active when viewing details
      setShowOnlySaved(false);
    }

    const path = newView === 'home' ? '/' : `/${newView.replace('admin-login', 'admin/login')}`;
    window.history.pushState({ view: newView }, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <HelmetProvider>
      {/* GLOBAL DEBUG OVERLAY REMOVED */}
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
          {isMobile ? (
            <>
              {/* Debug overlay removed */}
              {isMobile && (
                <MobileTopBar
                  title={getTitleForView(view)}
                  showBack={view?.startsWith('project-') || view?.startsWith('sensor-') || view === 'cartlist'}
                  onBack={() => setView('home')} // Basic back logic
                  onSettings={() => handleViewChange('settings')}
                  onSearch={() => setIsSearchOpen(true)}
                  onNotifications={() => setShowNotifications(true)}
                  onShare={view === 'project-detail' ? () => window.dispatchEvent(new CustomEvent('open-share')) : null}
                  userAvatar={isAuthenticated ? userAvatar : null} // PASS AVATAR HERE
                  onLogoClick={() => {
                    // alert(`Debug: Auth=${isAuthenticated}, View=${view}`); // TEMP DEBUG
                    if (isAuthenticated) {
                      handleViewChange('dashboard');
                    } else {
                      handleViewChange('login');
                    }
                  }}
                />
              )}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowNotifications(false)}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.5)',
                      zIndex: 2000,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      style={{
                        background: 'var(--surface)',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        textAlign: 'center',
                        maxWidth: '80%',
                        border: '1px solid var(--border)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                      }}
                    >
                      <Bell size={48} color="var(--primary)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text)' }}>All Caught Up!</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>You have no new notifications at this time.</p>
                      <button
                        onClick={() => setShowNotifications(false)}
                        style={{
                          marginTop: '1.5rem',
                          padding: '0.75rem 2rem',
                          background: 'var(--primary)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '1rem',
                          fontWeight: 700,
                          fontSize: '0.9rem'
                        }}
                      >
                        Close
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Navbar
              currentView={view}
              setView={handleViewChange}
              theme={theme}
              toggleTheme={toggleTheme}
              setIsSearchOpen={setIsSearchOpen}
              buildList={buildList}
              isMobile={isMobile}
            />
          )}

          <main style={{ paddingBottom: isMobile ? '80px' : '0' }}>
            <Suspense fallback={<LoadingFallback />}>
              {/* AnimatePresence removed */}
              {view === 'home' && (
                isMobile ? (
                  <MobileHome key="mobile-home" setView={handleViewChange} userName={userName} isAuthenticated={isAuthenticated} onSelectProject={handleProjectSelect} />
                ) : (
                  <Hero key="hero" setView={handleViewChange} />
                )
              )}

              {view === 'dashboard' && (
                isAuthenticated ? (
                  isMobile ? (
                    <AppDashboard setView={handleViewChange} isMobile={isMobile} />
                  ) : (
                    <DesktopDashboard setView={handleViewChange} />
                  )
                ) : (
                  // Redirect to login if not authenticated but accessing dashboard
                  // Ideally we set view to login, but for render return we can show Login
                  <Login setView={handleViewChange} />
                )
              )}


              {view === 'home' && (
                <>
                  {!isMobile && <div id="why"><HomeDetails /></div>}
                  {!isMobile && <Reviews theme={theme} setView={handleViewChange} />}
                  {!isMobile && <Community />}
                </>
              )}

              {view === 'roadmap' && (
                <motion.div key="view-roadmap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Roadmap setView={handleViewChange} />
                </motion.div>
              )}

              {view === 'mastery' && (
                <motion.div key="view-mastery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <MasteryHub />
                </motion.div>
              )}

              {view === 'c-course' && (
                <motion.div key="view-c-course" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <CProgrammingCourse onBack={() => handleViewChange('roadmap')} />
                </motion.div>
              )}

              {view === 'projects' && (
                <motion.div key="view-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Projects
                    onSelectProject={handleProjectSelect}
                    onAddToBuild={addToBuild}
                    onRemoveFromBuild={removeFromBuild}
                    buildList={buildList}
                    setView={handleViewChange}
                    showOnlySaved={showOnlySaved}
                    setShowOnlySaved={setShowOnlySaved}
                  />
                </motion.div>
              )}

              {view === 'share-project' && (
                <motion.div key="view-share" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ShareProject setView={handleViewChange} />
                </motion.div>
              )}

              {view === 'project-detail' && (
                <motion.div key="view-project-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
                </motion.div>
              )}

              {view === 'sensors' && (
                <motion.div key="view-sensors" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Sensors
                    isAdmin={isAdmin}
                    setEditingSensor={setEditingSensor}
                    setView={handleViewChange}
                    showOnlySaved={showOnlySaved}
                    setShowOnlySaved={setShowOnlySaved}
                  />
                  <SetupGuides />
                </motion.div>
              )}

              {view === 'blynk-iot' && (
                <motion.div key="view-blynk" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <BlynkIoT />
                </motion.div>
              )}

              {view === 'pinout' && (
                <motion.div key="view-pinout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <PinoutLab
                    initialFamily={activeFamily}
                    showOnlySaved={showOnlySaved}
                    setShowOnlySaved={setShowOnlySaved}
                  />
                </motion.div>
              )}

              {view === 'cartlist' && (
                <motion.div key="view-cartlist" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Cartlist buildList={buildList} onRemoveFromBuild={removeFromBuild} />
                </motion.div>
              )}

              {view === 'blog' && <motion.div key="view-blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Blog /></motion.div>}
              {view === 'qa' && <motion.div key="view-qa" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><QA /></motion.div>}
              {view === 'privacy' && <motion.div key="view-privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PrivacyPolicy setView={handleViewChange} /></motion.div>}
              {view === 'terms' && <motion.div key="view-terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><TermsOfService setView={handleViewChange} /></motion.div>}
              {view === 'about' && <motion.div key="view-about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><About setView={handleViewChange} /></motion.div>}
              {view === 'reviews-page' && <motion.div key="view-reviews" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ReviewsPage setView={handleViewChange} isAdmin={isAdmin} /></motion.div>}
              {view === 'simulator' && <motion.div key="view-sim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Simulator setView={handleViewChange} /></motion.div>}
              {view === 'assistant' && <motion.div key="view-ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><AIAssistant mode="screen" /></motion.div>}

              {view === 'settings' && (
                <motion.div key="view-settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Settings
                    theme={theme}
                    toggleTheme={toggleTheme}
                    setView={handleViewChange}
                    isAdmin={isAdmin}
                  />
                </motion.div>
              )}

              {view === 'login' && (
                <motion.div key="view-login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Login />
                </motion.div>
              )}


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
              {/* </AnimatePresence> Removed */}
            </Suspense>
          </main>

          {isMobile ? (
            <MobileBottomNav activeTab={view} onTabChange={handleViewChange} />
          ) : (
            <Footer setView={handleViewChange} />
          )}

          {!isMobile && <AIAssistant />}
          {!isMobile && <OnboardingTour isOpen={showTour} onComplete={() => setShowTour(false)} />}
          <SearchPalette
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            setView={handleViewChange}
            onSelectProject={handleProjectSelect}
          />

          <BackToTop />
          <SpeedInsights />
          <Analytics />
        </div>
      </ToastProvider>
    </HelmetProvider >
  );
}

export default App;
