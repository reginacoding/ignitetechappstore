import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import data from '../data.json';
import { ArrowLeft } from 'lucide-react';

interface Project {
    type: string;
    id: number;
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

interface DashboardProps {
    selectedDepartment: string;
    searchQuery: string;
    clearSearchQuery: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ selectedDepartment, searchQuery, clearSearchQuery }) => {
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        let filtered = data.projects;
        
        if (selectedDepartment !== 'all') {
            filtered = filtered.filter(project => project.type === selectedDepartment);
        }
        
        if (searchQuery) {
            filtered = filtered.filter(project => 
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        
        setFilteredProjects(filtered);
    }, [selectedDepartment, searchQuery]);


    if (searchQuery) {
        return (
            <div className="p-6 space-y-6">
                <div className="flex items-center mb-4">
                    <Link to="/" className="mr-4" onClick={clearSearchQuery}>
                        <ArrowLeft size={20} />
                    </Link>
                    <h2 className="text-2xl font-semibold">Results for "{searchQuery}"</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center">
                                <img src={project.icon} alt={project.title} className="w-12 h-12 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-600">{project.description}</p>
                                </div>
                            </div>
                            <Link
                                to={`/project/${project.id}`}
                                className="px-3 py-1 text-sm text-gray-600 border border-gray-400 rounded-md hover:bg-gray-50 transition-colors duration-200"
                            >
                                View
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6">
            <div className="bg-blue-900 text-white p-6 rounded-lg">
                <h6 className="text-sm text-slate-300	 uppercase mb-2">AI Innovation</h6>
                <h2 className="text-2xl font-semibold mb-2">See what's new in IgniteTech</h2>
                <p className="text-sm text-slate-300	">AI everywhere: processes, tools, and products</p>
            </div>
            
            {filteredProjects.length > 0 && (
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Featured Project</h3>
                        <ProjectCard
                            title={filteredProjects[0].title}
                            description={filteredProjects[0].description}
                            icon={filteredProjects[0].icon}
                            id={filteredProjects[0].id}
                        />
                    </div>
                    {filteredProjects.length > 1 && (
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">New Project</h3>
                            <ProjectCard
                                title={filteredProjects[1].title}
                                description={filteredProjects[1].description}
                                icon={filteredProjects[1].icon}
                                id={filteredProjects[1].id}
                            />
                        </div>
                    )}
                </div>
            )}
            
            <div>
                <h3 className="text-xl font-semibold mb-4">Try these company favourites</h3>
                <div className="grid grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                      <div className="border-b border-gray-200">
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            icon={project.icon}
                            id={project.id}
                        />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;