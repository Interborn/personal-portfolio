import React from 'react';

const InteractiveBanner = (props) => {
    
  return (
    <div className='lg:w-[66%] w-full card-zoom'>
          <div className={`mainBlock border border-violet-300 rounded-3xl group bg-cover bg-center transition-all ease-in hover:ease-out m-4 justify-end min-h-[19.5rem] p-[2rem] flex`} style={{ backgroundImage: props.background }} id={props.id}>
            <div className='flex flex-col justify-end items-start w-full'>
                <h1 className={`glowtext text-shadow-1 font-bold text-[26px] text-violet-800 max-w-[55%] mb-3 cursor-pointer`} id='bannerTitle'>{props.title}</h1>
                <div className='flex gap-6'>
                    <button className='text-violet-800'>  <span class="bg-gradient-to-r from-violet-800 to-violet-800 bg-no-repeat [background-position:0_88%] [background-size:100%_100%] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%_0.1em] group-hover:text-violet-800 text-violet-200 focus:[background-size:100%_100%] px-2 py-1 rounded-2xl">Source Code</span></button>
                    <button className='text-violet-800' onclick={`window.location.href='` + props.site + `';`}>  <span class="bg-gradient-to-r from-violet-800 to-violet-800 bg-no-repeat [background-position:0_88%] [background-size:100%_0.1em] motion-safe:transition-all motion-safe:duration-200 group-hover:[background-size:100%_100%] group-hover:text-violet-200 focus:[background-size:100%_100%] px-2 py-1 rounded-2xl">{props.siteName} →</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

// primaryColor: '',
// secondaryColor: '',

export default InteractiveBanner
