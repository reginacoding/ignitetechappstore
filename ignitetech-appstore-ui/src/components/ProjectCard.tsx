import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  onView: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-2">
        <img src={icon} alt={title} className="w-8 h-8 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button onClick={onView} className="px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200">
        View
      </button>
    </div>
  );
};

export default ProjectCard;