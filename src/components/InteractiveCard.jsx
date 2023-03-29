import React, { useState } from 'react'
import '../index.css';

const InteractiveCard = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [imageMaxWidth, setImageMaxWidth] = useState('5rem');
  
    const handleButtonClick = () => {
      setIsActive(!isActive);
      setImageMaxWidth(imageMaxWidth === '5rem' ? '0rem' : '5rem');
      if (props.onClick) {
        props.onClick();
      }
    };

  const buttonClassNames = `flex flex-col border rounded-3xl m-4 justify-between h-[19.5rem] p-[2rem] ease-in duration-500 cursor-pointer group ${isActive ? 'border-indigo-500' : 'border-slate-300 hover:border-indigo-500'} ${isActive ? 'shadow-xl shadow-violet-200 bg-violet-50' : 'hover:shadow-xl hover:shadow-violet-200 hover:bg-violet-50'}`;
  

  const iconClassNames = `iconImage max-w-[${imageMaxWidth}] duration-500 ease-out group-hover:color-violet-300 group-hover:max-w-[0rem]' : 'group-hover:max-w-[5rem] ${isActive ? 'max-w-[0rem]' : 'group-hover:max-w-[0rem]'}`;

  const hoverBounceClassNames = `hoverBounce ${isActive ? 'text-violet-400' : 'text-slate-400 group-hover:text-violet-400'}`;
  

  return (
    <div className='lg:w-[33%] card'>
        <button className={buttonClassNames} onClick={handleButtonClick}>
            <div className=''>    
                  <img src={props.icon} alt='' className={iconClassNames} />
            </div>
            <div className={hoverBounceClassNames}>
                <p className='text-[0.75rem] uppercase tracking-widest flex'>{props.subtitle}</p>
                <h2 className='font-medium tracking-wide text-[1.5rem] mt-2 text-left'>{props.title} →</h2>
                <div className={`opacity-0 display-none mt-4 transition duration-1000 transform ${isActive ? 'opacity-100 -translate-y-2' : 'group-hover:opacity-100 group-hover:-translate-y-2'}`}>
                    <h4 className={`max-h-0 overflow-hidden mt-6 transition duration-500 transform ${isActive ? 'max-h-full -translate-y-2' : 'group-hover:max-h-full group-hover:-translate-y-2'}`}>{props.body}</h4>
                </div>
            </div>
        </button>
    </div>
  )
}

export default InteractiveCard