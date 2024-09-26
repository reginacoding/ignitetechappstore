import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  id: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, id }) => {
  return (
    <div className="bg-white rounded-lg p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={icon} alt={title} className="w-8 h-8 mr-2" />
          <div>
            <h6 className="font-semibold text-gray-600">{title}</h6>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <a 
          href={`/project/${id}`}
          className="px-3 py-1 text-sm text-gray-600 border border-gray-400 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;