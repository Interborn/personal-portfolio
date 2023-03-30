import chatbotIcon from '../chatbot.png';
import webagencyIcon from '../webagency.png';
import crowdfundingIcon from '../crowdfunding.jpg';
import cadogy from '../cadogy-UB.png';
import chatbot from '../chatbot-UB.png';
import crowdfunding from '../crowdfunding-UB.png';
import matchmaster from '../matchmasters-UB.png';

export const projects = [
    {
        icon: chatbotIcon,
        subtitle: "Firebase | oAuth | Typescript",
        title: "Chatbot with oAuth & OpenAI API",
        body: "This project was a chatbox made using logic from OpenAI’s open API and oAuth. Developing this project resulted in critical experience in using APIs, authorization, React, and collaboration.",
        id: 'Chatbot',
    },
    {
        icon: webagencyIcon,
        subtitle: "NextJS | React | Sass",
        title: "Cadogy Digital Web Agency",
        body: "Cadogy’s website is an ongoing project showcasing my growth in the application of advanced React hooks and animation libraries such as GSAP, Locomotive, and React Spring through a web development agency.",
        id: 'Cadogy',
    },
    {
        icon: crowdfundingIcon,
        subtitle: "Thirdweb | Solidity | React",
        title: "Web3 Crowd Funding App",
        body: "This crowd funding app, built with a React front end and a smart contract based backend, resulted in valuable knowledge in the areas of blockchain/smart contracts, React, Thirdweb, and Hardhat.",
        id: 'Crowd Funding',
    },
    {
        icon: crowdfunding,
        subtitle: "DOM | Javascript",
        title: "Match Masters - DOM Game",
        body: "This crowd funding app, built with a React front end and a smart contract based backend, resulted in valuable knowledge in the areas of blockchain/smart contracts, React, Thirdweb, and Hardhat.",
        id: 'Match Masters',
    },
]
  
export const projectsBanner = [
    {
        title: 'Chatbot with oAuth & OpenAI API',
        background: `url(${chatbot})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Chatbot',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Chatbot',
    },
    {
        title: 'Cadogy Digital Web Agency',
        background: `url(${cadogy})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Cadogy',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Cadogy',
    },
    {
        title: 'Web3 Crowd Funding App',
        background: `url(${crowdfunding})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Crowd-Funding',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Crowd Funding',
    },
    {
        title: 'Match Masters - DOM Game',
        background: `url(${matchmaster})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Match Masters',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Match Masters',
    },
]