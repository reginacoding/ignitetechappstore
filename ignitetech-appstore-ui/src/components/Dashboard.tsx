import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailView from './ProjectDetailView';
import data from '../data.json';

interface Project {
    title: string;
    description: string;
    icon: string;
    spearhead: string;
    team: string;
    competency: string;
    deployedOn: string;
    createdOn: string;
    techStack: string;
    overview: string;
    preview: {
      images: string[];
    };
    useCase: string;
    contributors: string[];
    video: string;
}
const Dashboard: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={handleBack} />;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-blue-900 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">See what's new in IgniteTech</h2>
        <p>AI everywhere: processes, tools, and products</p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Featured Project</h3>
          <ProjectCard
            title={data.projects[0].title}
            description={data.projects[0].description}
            icon={data.projects[0].icon}
            onView={() => handleViewProject(data.projects[0])}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">New Project</h3>
          <ProjectCard
            title={data.projects[1].title}
            description={data.projects[1].description}
            icon={data.projects[1].icon}
            onView={() => handleViewProject(data.projects[1])}
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Try these company favourites</h3>
        <div className="grid grid-cols-3 gap-6">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
              onView={() => handleViewProject(project)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;