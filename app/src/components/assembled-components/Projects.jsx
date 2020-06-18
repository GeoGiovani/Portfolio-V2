import React from 'react';
import ProjectsBanner from '../sub-components/Projects/ProjectsBanner.jsx'
import ProjectsContent from '../sub-components/Projects/ProjectsContent.jsx'
import '../../styles/index.css';

function Projects() {
  return (
    <div id="Projects" className="project-page">
      <ProjectsBanner />
      <ProjectsContent />
    </div> 
  );
}

export default Projects;