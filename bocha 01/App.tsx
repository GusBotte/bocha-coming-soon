import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Workflow from './components/Workflow';
import Upload from './components/Upload';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import WorkflowDetail from './components/WorkflowDetail';
import About from './components/About';
import ReactiveMarquee from './components/ReactiveMarquee';
import { ViewState, Project, WorkflowItem } from './types';
import { INITIAL_PROJECTS, INITIAL_WORKFLOWS } from './constants';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [workflowItems] = useState<WorkflowItem[]>(INITIAL_WORKFLOWS);
  
  // State for selected items
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowItem | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('bocha_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleAddProject = (newProject: Project) => {
    const updatedProjects = [newProject, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem('bocha_projects', JSON.stringify(updatedProjects));
    setCurrentView(ViewState.GALLERY);
  };

  // Navigation Handlers
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentView(ViewState.PROJECT_DETAIL);
    window.scrollTo(0, 0);
  };

  const handleWorkflowClick = (item: WorkflowItem) => {
    setSelectedWorkflow(item);
    setCurrentView(ViewState.WORKFLOW_DETAIL);
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Hero onNavigate={setCurrentView} />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.GALLERY:
        return <Gallery projects={projects} onProjectClick={handleProjectClick} />;
      case ViewState.PROJECT_DETAIL:
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setCurrentView(ViewState.GALLERY)} 
          />
        ) : <Gallery projects={projects} onProjectClick={handleProjectClick} />;
      case ViewState.WORKFLOW:
        return <Workflow items={workflowItems} onItemClick={handleWorkflowClick} />;
      case ViewState.WORKFLOW_DETAIL:
        return selectedWorkflow ? (
          <WorkflowDetail 
            item={selectedWorkflow} 
            onBack={() => setCurrentView(ViewState.WORKFLOW)} 
          />
        ) : <Workflow items={workflowItems} onItemClick={handleWorkflowClick} />;
      case ViewState.UPLOAD:
        return <Upload onAddProject={handleAddProject} />;
      default:
        return <Hero onNavigate={setCurrentView} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-bocha-pink selection:text-white">
        <Header currentView={currentView} setCurrentView={setCurrentView} />
        
        {/* Global Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-bocha-purple/5 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-bocha-cyan/5 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
        </div>
        
        <main className="w-full relative">
          {renderView()}
        </main>
        
        <Contact />

        <footer className="py-16 border-t border-white/5 bg-black relative z-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0">
               <h4 className="font-logo text-2xl text-white">Bocha</h4>
               <p>© {new Date().getFullYear()} Vibe-coded with AI. 🇦🇷</p>
            </div>
            <div className="flex gap-8">
              <a 
                href="https://www.instagram.com/bocha.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-bocha-cyan transition-colors font-bold uppercase tracking-wider text-xs"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/bocha-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-bocha-yellow transition-colors font-bold uppercase tracking-wider text-xs"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;