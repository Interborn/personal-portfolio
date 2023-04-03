import React from 'react';
import { projects } from '../assets/data/projects'
import { PrimaryProjectCard, SecondaryProjectCard } from '../components/ProjectCards';

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-around max-w-6xl mx-4 bg-white my-10'>
        <p className='uppercase'>projects</p>
        <div className='flex lg:flex-row flex-col'>
          <h1 className='font-medium text-[36px] w-full'>React Chatbot<br/>Cadogy Web Agency<br/>Web3 Crowd Funding</h1>
          <p className='text-[20px] max-w-[100ch] w-full'>These projects mean a lot to me as they have helped me in my learning journey. Through the process of building and breaking and crying, I have more knowledge of the technologies involved, how they work together, and how to use them to create anything I can imagine.</p>
        </div>
      </div>
      <div className="flex w-full justify-center mx-auto lg:py-10 lg:pb-20 max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-center items-center mx-4 md:gap-8 gap-2">
          <div className="w-full h-full">
            {projects.slice(0, -2).map((project, index) => (
              <PrimaryProjectCard key={index} icon={project.icon} category={project.category} title={project.title} description={project.description} />
            ))}
          </div>
          <div className="flex flex-col w-full h-full gap-4">
            {projects.slice(1, projects.length).map((project, index) => (
              <SecondaryProjectCard key={index} icon={project.icon} category={project.category} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
