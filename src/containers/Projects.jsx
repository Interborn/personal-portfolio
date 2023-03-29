import React, { useState } from 'react';
import '../index.css';
import InteractiveCard from '../components/InteractiveCard';
import InteractiveBanner from '../components/InteractiveBanner';
import { projects, projectsBanner } from '../assets/data/projects';

const Projects = () => {
  const [activeBannerId, setActiveBannerId] = useState('Cadogy');

  function handleClick(project) {
    setActiveBannerId(project.id);
  }

  return (
    <div className="flex flex-col w-full items-center justify-center py-3 pb-16 mx-auto">

      {/* Header */}
      <div className='flex flex-col justify-around max-w-6xl mx-6'>
        <p className='uppercase'>Projects</p>
        <div className='flex md:flex-row flex-col my-4'>
          <h1 className='font-medium text-[36px] w-full'>My passion for learning resulted in these projects:</h1>
          <p className='text-[20px] w-[100ch]'>We utilize trending technologies and the power of artificial intelligence to create digital experiences that are secure, responsive, and immersive.</p>
        </div>
      </div>

      {/* Projects */}
      <div className='flex flex-wrap justify-evenly xl:max-w-6xl flex-col lg:flex-row w-full'>
        {projects.slice(0, -1).map((project, index) => (
          <InteractiveCard key={index} icon={project.icon} title={project.title} subtitle={project.subtitle} body={project.body} className={project.class} onClick={() => handleClick(project)} />
        ))}
        {projectsBanner.map((banner, index) => (
          banner.id === activeBannerId && <InteractiveBanner key={index} background={banner.background} title={banner.title} site={banner.site} siteName={banner.siteName} />
        ))}
        {[projects.slice(-1)[0]].map((project, index) => (
          <InteractiveCard key={index} icon={project.icon} title={project.title} subtitle={project.subtitle} body={project.body} className={project.class} />
        ))}
      </div>
    </div>
  )
}

export default Projects