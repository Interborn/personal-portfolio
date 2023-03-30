import chatbot from '../chatbot.png';
import webagency from '../webagency.png';
import crowdfunding from '../crowdfunding.jpg';
import cadogyB from '../cadogy-blurred.png';
import cadogyUB from '../cadogy-unblurred.png';
import chatbotB from '../chatbot-blurred.png';
import chatbotUB from '../chatbot-unblurred.png';
import crowdfundingB from '../crowdfunding-blurred.png';
import crowdfundingUB from '../crowdfunding-unblurred.png';
import matchmasterB from '../matchmaster-blurred.png';
import matchmasterUB from '../matchmaster-unblurred.png';

export const projects = [
    {
        icon: chatbot,
        subtitle: "Firebase | oAuth | Typescript",
        title: "Chatbot with oAuth & OpenAI API",
        body: "This project was a chatbox made using logic from OpenAI’s open API and oAuth. Developing this project resulted in critical experience in using APIs, authorization, React, and collaboration.",
        id: 'Chatbot',
    },
    {
        icon: webagency,
        subtitle: "NextJS | React | Sass",
        title: "Cadogy Digital Web Agency",
        body: "Cadogy’s website is an ongoing project showcasing my growth in the application of advanced React hooks and animation libraries such as GSAP, Locomotive, and React Spring through a web development agency.",
        id: 'Cadogy',
    },
    {
        icon: crowdfunding,
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
        background: `url(${chatbotB})`,
        backgroundUnblurred: `url(${chatbotUB})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Chatbot',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Chatbot',
    },
    {
        title: 'Cadogy Digital Web Agency',
        background: `url(${cadogyB})`,
        backgroundUnblurred: `url(${cadogyUB})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Cadogy',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Cadogy',
    },
    {
        title: 'Web3 Crowd Funding App',
        background: `url(${crowdfundingB})`,
        backgroundUnblurred: `url(${crowdfundingUB})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Crowd-Funding',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Crowd Funding',
    },
    {
        title: 'Match Masters - DOM Game',
        background: `url(${matchmasterB})`,
        backgroundUnblurred: `url(${matchmasterUB})`,
        source: 'github.com',
        site: 'vercel.com',
        siteName: 'Match Masters',
        primaryColor: '#ddd6fe',
        secondaryColor: 'violet-800',
        id: 'Match Masters',
    },
]