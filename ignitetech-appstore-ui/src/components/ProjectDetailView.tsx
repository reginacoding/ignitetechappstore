import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProjectDetailViewProps {
  project: {
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
  };
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.preview.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + project.preview.images.length) % project.preview.images.length
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-100 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft size={20} />
            <span className="ml-2">Back</span>
          </Button>
          <div className="flex items-center">
            <img src={project.icon} alt={project.title} className="w-10 h-10 mr-3" />
            <div>
              <h1 className="text-xl font-semibold">{project.title}</h1>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        </div>
        <div>
          <Button variant="outline" className="mr-2">Source</Button>
          <Button>View</Button>
        </div>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <InfoItem label="SPEARHEAD" value={project.spearhead} />
          <InfoItem label="TEAM" value={project.team} />
          <InfoItem label="COMPETENCY" value={project.competency} />
          <InfoItem label="DEPLOYED ON" value={project.deployedOn} />
          <InfoItem label="CREATED ON" value={project.createdOn} />
          <InfoItem label="TECH STACK" value={project.techStack} />
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <section className="col-span-3">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">{project.overview}</p>
          </section>
          <section className="col-span-1">
            <h2 className="text-lg font-semibold mb-2">Project Contributors</h2>
            <div className="flex flex-col space-y-2">
              {project.contributors.map((contributor, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {contributor}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              <img src={project.preview.images[currentImageIndex]} alt="Preview" className="w-full rounded-lg" />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" onClick={prevImage}><ChevronLeft size={16} /></Button>
                <Button size="sm" variant="secondary" onClick={nextImage}><ChevronRight size={16} /></Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Use Case</h2>
          <p className="text-gray-700">{project.useCase}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">Check out this video presentation:</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <video controls className="w-full h-full">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-sm text-gray-900">{value}</p>
  </div>
);

export default ProjectDetailView;