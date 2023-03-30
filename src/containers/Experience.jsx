import React from 'react';
import Atropos from 'atropos/react';

const experiences = [
  {
    position: 'Software Engineer',
    company: ' - Cadogy',
    start: 'Nov 2020',
    end: 'Present',
    location: 'Austin, TX',
    remote: true,
    icon: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    accomplishments: [
      'Collaborated with cross-functional teams to develop and implement user-centered designs, resulting in improved website usability, increased user engagement, and technical SEO optimization.',
      'Designed & implemented scalable database applications for private clients, utilizing HTML5, JavaScript, & CSS3.',
      'Utilized CMS (XenForo & IPS Invision Community) to develop a successful gaming community platform, currently hosting over 24,000 active members and generating $14,500+ yearly revenue.',
      'Spearheaded the development of communication structures such as the company’s websites, discord, telegram, and other online communities.',
      'Applied advanced responsive design principles and actively engaged in code reviews, identifying, and resolving technical issues with speed and accuracy, resulting in improved code quality and overall site performance.',
    ],
    img: '',
  },
  {
    position: 'Professional Development',
    company: '',
    start: 'Dec 2021',
    end: 'Feb 2023',
    location: 'Denver, CO',
    remote: false,
    icon: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    accomplishments: [
      'Full-stack development via the MERN Stack (MongoDB, Express.JS, React.JS, Node.JS).',
      'C++ development, OOP, programming algorithms, and developer best practices.',
      'Fundamentals of Solidity & the blockchain (including NFTs, tokens, DAOs, PoW tech, PoC tech, etc.).',
    ],
    img: `https://4.bp.blogspot.com/-v66wjhZtV2s/XeYfXWhF_JI/AAAAAAAAAjw/wxSiAT-44Gky2llscScPOnE7T9oH4FFNACLcBGAsYHQ/s1600/Data_PortabilityPrivacy.gif`,
  },
  {
    position: 'Social Media Director',
    company: ' - Heaven ',
    start: 'July 2019',
    end: 'Dec 2019',
    location: 'Los Angeles, CA',
    remote: false,
    icon: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    accomplishments: [
      'Implemented innovative engagement strategies to achieve 30% social media growth in the first month.',
      'Produced original content, including hundreds of images, gifs, stories, feed posts, videos, articles, blogs and more for Facebook, Snapchat, Pinterest, and Instagram platforms.',
      'Developed impactful content that aligned with brand values and style, as well as supported partner brands.',
      'Boosted brand recognition through coordinating virtual and face-to-face experiences.',
    ],
    img: 'https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif',
  },
  {
    position: 'Operations Manager',
    company: ' - Firehaus Cannabis Dispensary',
    start: 'Nov 2017',
    end: 'June 2019',
    location: 'West Los Angeles, CA',
    remote: false,
    icon: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    accomplishments: [
      'Lead team of 18 delivery personnel, fostering a positive and productive work environment, resulting in no turnover.',
      'Boosted revenue by over 200% through the implementation of effective delivery plans, customer education initiatives, and sales tactics.',
      'Ensured full compliance with industry and corporate regulations, as well as legal compliance.',
      'Maintained accurate financial records, reconciled daily and weekly transactions, and accounted for large sums of money.',
      'Utilized data analysis and industry insights to develop targeted marketing strategies.',
      'Managed delivery logistics, including driver scheduling, route optimization, and financial management.',
      'Achieved sales targets through strategic product positioning, cross-selling and upselling tactics, and team incentives.',
    ],
    img: '',
  },
]

const Experience = () => {

  return (
    <div className='flex h-full w-full'>
      <div className='w-full h-full bg-violet-500 flex flex-wrap justify-center items-center'>
        {experiences.map((exp, index) => (
          <div className="job m-10 rounded-lg">
            <Atropos className="z-[200] rounded-2xl" activeOffset={25} shadow={true} shadowScale={0.95} rotateXMax={5} rotateYMax={5} key={index}>
              <a href="#" class="relative block overflow-hidden rounded-lg bg-white md:h-[450px] border border-gray-100 p-4 sm:p-6 lg:p-8">
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
                      <li data-atropos-offset="0.5" class="max-w-[70ch] mt-3 text-sm text-gray-500" key={index}>{acc}</li>
                    ))}
                  </ul>
                  <div className='flex gap-16 justify-center items-center md:flex hidden'>
                    {exp.img == 'https://covaxdata.com/wp/wp-content/uploads/2021/09/Blockchain-Color.gif' ?  <img src={exp.img} className="max-w-[200px]"></img> : '' }
                    {exp.img == 'https://4.bp.blogspot.com/-v66wjhZtV2s/XeYfXWhF_JI/AAAAAAAAAjw/wxSiAT-44Gky2llscScPOnE7T9oH4FFNACLcBGAsYHQ/s1600/Data_PortabilityPrivacy.gif' ?  <img src={exp.img} className="max-w-[650px]"></img> : '' }
                    {exp.img == 'https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif' ? <img src={exp.img} className="max-w-[400px] -mt-20 -mx-20 -mr-14"></img> : '' }
                    {exp.img == 'https://i.pinimg.com/originals/ea/db/74/eadb74787dda41cc6333341e55293432.gif' ? <img src={exp.img} className="max-w-[400px] -mt-20 -mx-20 -ml-14"></img> : '' }
                  </div>
                </div>
              </a>
            </Atropos>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
