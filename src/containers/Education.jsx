import React from 'react';
import clouds1 from '../assets/clouds_1.png';
import clouds2 from '../assets/clouds_2.png';
import ground from '../assets/ground.png';
import rocks from '../assets/rocks.png';

export const educations = [
  {
    school: 'Full Sail University',
    start: 'Mar 2020',
    end: 'Nov 2023',
    degree: "Bachelor's of Science",
    concentration: 'Digital Marketing',
    location: 'Orlando, FL (Remote)',
    remote: true,
  },
  {
    school: 'Florida Gulf Coast University',
    start: 'Aug 2014',
    end: 'May 2017',
    degree: '',
    concentration: 'Entrepreneurship',
    location: 'Fort Myers, FL',
    remote: false,
    associations: [
      'Alpha Epsilon Pi',
      'Relay for Life',
    ],
  },
];

const Education = () => {
  return (
    <div>
      Education
    </div>
  )
}

export default Education
