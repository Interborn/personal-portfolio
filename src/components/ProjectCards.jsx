import React, { useState } from 'react';
import CardFlip from 'react-card-flip';

export const featuredDetails = [
  {
    icon: "https://cdn.andnowuknow.com/mainStoryImage/us-foods_q1_5-18-22-anuk.png?pVBIKc6fHoClYHYTq7j77vlJkdbMSf0W",
    category: "CASE CUSTOMER STUDY",
    title: "How US Foods Streamlines App Updates",
    description: "How US Foods is using Ionic to build a better ecommerce experience",
  },
]
export const secondaryDetails = [
  {
    icon: "https://i.guim.co.uk/img/media/db2d0b4600c445e5a48b02febf29547b7fbc6ae6/0_213_8107_4864/master/8107.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=74ea70d24a1d4ff85c25aa64cc120741",
    category: "PROJECT",
    title: "ChatGPT Rebuild. Harnessing the Power of GPT-3",
    description: "",
  },
  {
    icon: "https://news.artnet.com/app/news-upload/2022/09/GettyImages-1243526585.jpg",
    category: "PROJECT",
    title: "Integration with DALL-E. Transforming Images.",
    description: "",
  },
]

export const PrimaryProjectCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="flex items-center flex-col select-none hover:cursor-pointer bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300 w-full lg:h-[385px]" onClick={onCardClick}>
        {/* IMAGE CONTAINER */}
        <div className="flex m-4 xl:m-0 xl:my-4 max-h-[177px] max-w-[518px]">
          <img className="mx-auto object-cover rounded-2xl" src={props.icon} alt="" />
        </div>
        {/* DETAILS CONTAINER */}
        <div className="max-w-[90%] pb-3 md:pb-0 mx-auto text-[#808191]">
          <div>
            <p className="font-mono py-3 font-bold text-[12px] text-[#92a0b3]">
              {props.category}
            </p>
            <h1 className="max-w-[100%] mx-auto font-[500] text-[#3d3d3d] text-[24px]">
              {props.title}
            </h1>
            <p className="text-[17px] mb-3 primFront-description">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col select-none bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300 w-full min-h-[385px]" onClick={onCardClick}>
        <div className="max-w-[90%] pb-3 md:pb-0 mx-auto my-7 text-[#808191]">
          <div>
            <h1 className="max-w-[100%] mx-auto font-[500] text-[#3d3d3d] text-[24px]">
              {props.title}
            </h1>
            <p className="text-[17px] mb-3">
              {props.description}
            </p>
          </div>
          <div className='flex gap-4 pt-3'>
            <button className='bg-violet-300 px-4 py-1 rounded-lg font-bold text-gray-800'>Source Code</button>
            <button className='bg-violet-300 px-4 py-1 rounded-lg font-bold text-gray-800'>Project</button>
          </div>
        </div>
      </div>
    </CardFlip>
  );
};


export const SecondaryProjectCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* FRONT CARD */}
        <div className="flex flex-col sm:flex-row items-center select-none hover:cursor-pointer bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300 lg:h-[182px]" onClick={handleCardClick}>
          {/* IMAGE CONTAINER */}
          <div className="flex m-4 my-4 max-h-[177px]  max-w-[518px]">
            <img className="sm:w-[160px] sm:h-[150px] object-cover rounded-2xl" src={props.icon} alt="" />
          </div>
          {/* TITLE CONTAINER */}
          <div className="mx-4 md:mx-2 md:my-2 self-start">
            <p className="font-mono py-2 font-bold text-[12px] text-[#92a0b3]">{props.category}</p>
            <h1 className="md:max-w-[24ch] font-[500] text-[#3d3d3d] sm:text-[24px] text-[18px]">{props.title}</h1>
          </div>
        </div>
        {/* BACK CARD */}
        <div className="flex flex-col sm:flex-row items-center select-none bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300" onClick={handleCardClick}>
          {/* TITLE CONTAINER */}
          <div className="self-start lg:h-[160px] max-h-[177px]  max-w-[518px] my-3 mx-6">
            <div className='flex gap-4'>
              <h1 className="max-w-[100%] mx-auto font-[500] text-[#3d3d3d] text-[24px] w-full">
                {props.title}
              </h1>
              <button className='bg-violet-300 px-3.5 py-1 rounded-lg text-[12px] text-gray-800'>S</button>
              <button className='bg-violet-300 px-3.5 py-1 rounded-lg text-[12px] text-gray-800'>P</button>
            </div>
            <p className="text-[17px] mb-3 text-[#808191]">
              {props.description}
            </p>
          </div>
        </div>
      </CardFlip>
    );
  };