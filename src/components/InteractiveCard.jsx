import React, { useState } from 'react'
import '../index.css';

const InteractiveCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    if (props.onClick) {
      props.onClick();
    }
  };

  const buttonClassNames = `flex flex-col border border-slate-300 rounded-lg m-4 justify-between h-[19.5rem] p-[2rem] ease-in duration-300 cursor-pointer group  ${isActive ? 'active:border-indigo-500 shadow-xl shadow-violet-200 bg-violet-50' : 'hover:border-indigo-500 hover:shadow-xl hover:shadow-violet-200 hover:bg-violet-50'}`;

  const iconClassNames = `iconImage max-w-[5rem] duration-300 ease-out group-hover:color-violet-300 group-hover:max-w-[0rem]' : ' ${isActive ? 'w-[0rem]' : 'group-hover:max-w-[0rem]'}`;

  const hoverBounceClassNames = `hoverBounce ${isActive ? 'text-violet-400' : 'text-slate-400 group-hover:text-violet-400'}`;
  

  return (
    <div className='lg:w-[33%] card'>
        <button className={buttonClassNames} onClick={handleButtonClick}>
            <div>    
                  <img src={props.icon} alt='' className={iconClassNames} />
            </div>
            <div className={hoverBounceClassNames}>
                <p className='text-[0.75rem] uppercase tracking-widest flex'>{props.subtitle}</p>
                <h2 className='font-medium tracking-wide text-[1.5rem] mt-2 text-left'>{props.title} →</h2>
                <div className={`opacity-0 display-none mt-4 transition duration-500 transform ${isActive ? 'opacity-100 -translate-y-2' : 'group-hover:opacity-100 group-hover:-translate-y-2'}`}>
                    <h4 className={`max-h-0 overflow-hidden mt-6 transition duration-300 transform ${isActive ? 'max-h-full -translate-y-2' : 'group-hover:max-h-full group-hover:-translate-y-2'}`}>{props.body}</h4>
                </div>
            </div>
        </button>
    </div>
  )
}

export default InteractiveCard