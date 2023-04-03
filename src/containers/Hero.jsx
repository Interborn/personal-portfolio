import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Projects from './Projects';

const images = [
  "https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png",
  "https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png",
  "https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png",
]

const links = [
  {
    title: 'LinkedIn',
  },
  {
    title: 'GitHub',
  },
  {
    title: 'Cadogy',
  },
  {
    title: 'Email',
  },
  {
    title: 'Resume',
  },
]

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Attach event listener to window on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <section className='h-full'>
        <div className="h-[100vh] flex">
          <div className='flex justify-center items-start md:flex-row flex-col'>
            <div className="w-full h-full flex flex-col justify-center items-center sm:mt-0 mt-20">
              <div className='2xl:mx-20 mx-10'>
                <h3 className='text-[44px]'>Dylan Safra</h3>
                <h1 className='text-[34px] font-black'>Software Engineer</h1>
                <p className='text-[18px]'>My convention of continual learning and my habit for going above and beyond continue to lead me down this technological rabbit hole!</p>
                <div className='flex flex-wrap gap-x-8 gap-y-4 py-4 justify-start'>
                  {links.map((link, index) => (
                    <button className='bg-violet-500 text-white hover:bg-violet-400 px-4 py-1 rounded-md' key={index}>{link.title}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full h-full'>
            {window.innerWidth >= 770 ? (
              <div className="w-full h-full flex gap-8 items-center justify-center xl:pr-40 md:pr-10">
                <Parallax y={[-50, 50]} rotate={['-90deg', '45deg']}>
                  <div className="2xl:w-[10rem] w-[6rem] xl:w-[8rem] 2xl:h-[20rem] h-[12rem] xl:h-[16rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateY(${scrollY * -1.5}px)` }} />
                </Parallax>
                <Parallax y={[-50, 50]} rotate={['-90deg', '45deg']}>
                  <div className="2xl:w-[15rem] w-[8rem] xl:w-[11.5rem] 2xl:h-[30rem] h-[18rem] xl:h-[24rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateY(${scrollY * 2.75}px)` }}/>
                </Parallax>
                <Parallax y={[-50, 50]} rotate={['-90deg', '45deg']}>
                  <div className="2xl:w-[10rem] w-[6rem] xl:w-[8rem] 2xl:h-[20rem] h-[12rem] xl:h-[16rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateY(${scrollY * -1}px)` }}/>
                </Parallax>
              </div>
              ) : (
                <div className="w-full h-full flex gap-8 items-center justify-center">
                <Parallax rotate={['-45deg', '45deg']}>
                  <div className="w-[6rem] h-[12rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateZ(${scrollY * -1.5}px)` }} />
                </Parallax>
                <Parallax rotate={['-45deg', '45deg']}>
                  <div className="w-[8rem] h-[18rem] xl:h-[24rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateZ(${scrollY * 2.75}px)` }}/>
                </Parallax>
                <Parallax rotate={['-45deg', '45deg']}>
                  <div className="w-[6rem] h-[12rem] xl:h-[16rem] bg-black rounded-full -rotate-[25deg]" style={{ transform: `translateZ(${scrollY * -1}px)` }}/>
                </Parallax>
              </div>
            )}
            </div>
          </div>
        </div>
        <div className='w-full h-full'>
          <Projects />
        </div>
      </section>
    </div>
  )
}

export default Hero
