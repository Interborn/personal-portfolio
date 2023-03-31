import React, { useState, useEffect } from 'react';
import Atropos from 'atropos/react';
import { experiences } from '../assets/data/experiences.js'
import newspaper from '../assets/bg-test9.png'
import { Parallax } from 'react-scroll-parallax';

const Experience = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className='flex h-full w-full flex-col justify-center items-center'>
      <div className='expBackground'>
      <Parallax translateX={['600px', '0px']} className="w-[400vw]  2xl:h-[260vh] h-[290vh] -z-10 bg-repeat bg-fixed" style={{ backgroundImage: `url(${newspaper})`, transform: `translateX(${offsetY * 0.5}px)` }} />
      </div>
      <div className='expContent w-full h-full flex flex-col justify-center items-center absolute lg:mt-0 mt-0 md:mt-40'>
        <div className='flex flex-col justify-around max-w-7xl mx-4 bg-white p-8 mt-16 mb-10 rounded-lg border-violet-400 border-2'>
          <p className='uppercase'>Experiences</p>
          <div className='flex lg:flex-row-reverse flex-col'>
            <h1 className='font-medium text-[36px] w-full '>“Life happens wherever you are, whether you make it or not.”</h1>
            <p className='text-[20px] max-w-[100ch]'>We utilize trending technologies and the power of artificial intelligence to create digital experiences that are secure, responsive, and immersive.</p>
          </div>
        </div>
        <div></div>
        {experiences.map((exp, index) => (
          <div className="job rounded-lg [&:nth-child(2)]: 2xl:w-[55%] lg:w-[70%] w-[100%] sm:px-10 px-8 mb-8  self-start lg:odd:self-start lg:even:self-end even:self-start flex lg:odd:flex-row odd:flex-row-reverse even:flex-row">
            {index % 2 == 0 ? '' : 
              <div className='w-[80px] h-80 bg-white rounded-full self-center mx-6 sm:flex hidden items-center justify-center border-violet-400 border-2'>
                <p className='-rotate-90 sm:text-[66px] font-bold'>{exp.year}</p>
              </div>
            }
            <div className='w-[100%]'>
              <Atropos className="z-[200] rounded-2xl w-[100%]" activeOffset={25} shadow={true} shadowScale={0.95} rotateXMax={5} rotateYMax={5} key={index}>
                <a href="#" class="relative block overflow-hidden rounded-lg w-[100%] bg-white border border-gray-100 p-4 sm:p-6 lg:p-8">
                  <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" ></span>
                  <div class="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 data-atropos-offset="1" class="text-lg font-bold text-gray-900 sm:text-xl">
                        {exp.position} {exp.company}
                      </h3>
                      <p data-atropos-offset="1" class="mt-1 text-xs font-medium text-gray-600">{exp.start}  -  {exp.end}<br />{exp.location} {exp.remote == true ? ' (Remote)' : ''}</p>
                    </div>
                    <div data-atropos-offset="1" class="hidden sm:block sm:shrink-0">
                      <img alt={exp.position} src={exp.icon} class="h-16 w-16 rounded-lg object-cover shadow-sm" />
                    </div>
                  </div>
                  <div class="mt-4 flex flex-col items-center">
                    <ul className='list-disc mx-6'>
                      {exp.accomplishments.map((acc, index) => (                  
                        <li data-atropos-offset="0.5" class="max-w-[90%] mt-3 text-sm text-gray-500" key={index}>{acc}</li>
                      ))}
                    </ul>
                    <div className='gap-16 justify-center items-center md:flex hidden'>
                      {exp.img == 'https://covaxdata.com/wp/wp-content/uploads/2021/09/Blockchain-Color.gif' ?  <img src={exp.img} className="max-w-[200px]"></img> : '' }
                      {exp.img == 'https://4.bp.blogspot.com/-v66wjhZtV2s/XeYfXWhF_JI/AAAAAAAAAjw/wxSiAT-44Gky2llscScPOnE7T9oH4FFNACLcBGAsYHQ/s1600/Data_PortabilityPrivacy.gif' ?  <img src={exp.img} className="2xl:max-w-[650px]" data-atropos-offset="0.25"></img> : '' }
                      {exp.img == 'https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif' ? <img src={exp.img} className="lg:max-w-[400px] -mt-20 -mx-20 -mr-14"></img> : '' }
                      {exp.img == 'https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif' ? <img src={exp.img} className="lg:max-w-[400px] -mt-20 -mx-20 -ml-14"></img> : '' }
                    </div>
                  </div>
                </a>
              </Atropos>
            </div>
            {index % 2 !== 0 ? '' : 
              <div className='w-[80px] h-80 bg-white rounded-full self-center mx-6 sm:flex hidden items-center justify-center border-violet-400 border-2'>
                <p className='-rotate-90 lg:rotate-90 sm:text-[66px] font-bold'>{exp.year}</p>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
