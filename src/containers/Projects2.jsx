import React from 'react';
import { PrimaryProjectCard, SecondaryProjectCard, featuredDetails, secondaryDetails} from '../components/ProjectCards';

const Projects2 = () => {
  return (
    <div className="flex bg-violet-200 w-full justify-center mx-auto lg:py-10 lg:pb-20">
      <div className="flex flex-col sm:flex-row justify-center items-center mx-4 my-4 md:gap-8 gap-2">
        {featuredDetails.map((card, index) => (
          <PrimaryProjectCard key={index} icon={card.icon} category={card.category} title={card.title} description={card.description} />
        ))}
        <div className="flex-col w-full">
          {secondaryDetails.map((card, index) => (
            <SecondaryProjectCard key={index} icon={card.icon} category={card.category} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects2;
