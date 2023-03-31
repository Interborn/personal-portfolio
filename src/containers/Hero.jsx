import React, { useState } from 'react';

const images = [
  "https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png",
  "https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png",
  "https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png",
]

const Hero = () => {

  return (
    <div>
      <section className='heroSection flex w-full'>
        <div className="bg-black text-white py-20 w-full flex justify-center">
          <div className="flex flex-col justify-center items-start align-middle p-8">
            <h1 className="text-[30px] p-2 text-yellow-300 leading-none">Dylan Safra</h1>
            <h2 className="text-[48px] leading-relaxed md:leading-snug mb-2">Software Engineer
            </h2>
            <p className="text-sm text-gray-50 mb-4 max-w-[60ch] xl:w-[60ch]">Explore your favourite events and register now to showcase your talent and win exciting prizes.</p>
            <a href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 w-full  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" />
              </div>
              <div>
                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" />
              </div>
              <div>
                <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
