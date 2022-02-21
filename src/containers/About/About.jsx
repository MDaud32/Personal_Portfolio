import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const abouts = [
  {
    title: 'Web Development',
    description: 'i am a good developer',
    imgURL: '',
  },
  {
    title: 'Web Applications',
    description: 'i am good at buidling web applications',
    imgURL: '',
  },
  {
    title: 'UI/Ux Design',
    description: 'i am a professional UI/UX Designer',
    imgURL: '',
  },
  {
    title: 'Web Animations',
    description: 'i will do web animations for your website',
    imgURL: '',
  },
];

export default function About() {
  return (
    <div className="head-text">
      I know That
      <span> Good Design</span>
      <br />
      means
      <span> Good Business</span>
    </div>
  );
}
