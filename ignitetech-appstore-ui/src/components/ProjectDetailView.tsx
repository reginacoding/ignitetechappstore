import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import data from '../data.json';


const ProjectDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = data.projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="p-6 bg-white mx-auto max-w-5xl">
        <div className="mb-4">
          <Link to="/">
            <Button variant="ghost" className="px-0">
              <ArrowLeft size={20} className="mr-2" />
              <span>Back</span>
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={project.icon} alt={project.title} className="w-12 h-12 mr-3" />
            <div>
              <h1 className="text-xl font-semibold">{project.title}</h1>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
          <div>
            <Button variant="outline" className="mr-2 border-gray-500">Source</Button>
            <Button variant="secondary" className="bg-gray-500 text-white hover:bg-gray-400">View</Button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-6 gap-6 mb-6 border-b border-t border-gray-200 py-4">
          <InfoItem label="SPEARHEAD" value={project.spearhead} />
          <InfoItem label="TEAM" value={project.team} />
          <InfoItem label="COMPETENCY" value={project.competency} />
          <InfoItem label="DEPLOYED ON" value={project.deployedOn} />
          <InfoItem label="CREATED ON" value={project.createdOn} />
          <InfoItem label="TECH STACK" value={project.techStack} />
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <section className="col-span-3 border-gray-200 border-r">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">{project.overview}</p>
          </section>
          <section className="col-span-1">
            <div>
              <p className="text-xs font-medium text-gray-500">PROJECT CONTRIBUTORS</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {project.contributors.map((contributor, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded text-sm">
                  {contributor}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {project.preview.images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <img src={image} alt={`Preview ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
    <p className="text-xs font-medium text-gray-500">{label}</p>
    <p className="mt-1 text-sm text-gray-900">{value}</p>
  </div>
);

export default ProjectDetailView;