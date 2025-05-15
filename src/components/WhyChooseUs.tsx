
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const gymContent = [
  {
    title: 'Unlock Your Strength: A Personalized Fitness Journey',
    description:
      'Start your fitness journey tailored to your unique goals and lifestyle. Our customized training plans and expert guidance empower you to build strength, confidence, and lasting habits for a healthier you.',
  },
  {
    title: 'Unlock Your Strength: A Personalized Fitness Journey',
    description:
      'Start your fitness journey tailored to your unique goals and lifestyle. Our customized training plans and expert guidance empower you to build strength, confidence, and lasting habits for a healthier you.',
  },
  {
    title: 'Unlock Your Strength: A Personalized Fitness Journey',
    description:
      'Start your fitness journey tailored to your unique goals and lifestyle. Our customized training plans and expert guidance empower you to build strength, confidence, and lasting habits for a healthier you.',
  },
  {
    title: 'Live Coaching & Real-Time Feedback',
    description:
      'Experience real-time support from certified trainers during your workouts. Get instant feedback on your form and progress, helping you stay motivated and injury-free while reaching your goals faster.',
  },
  {
    title: 'Science-Backed Training Programs',
    description:
      'Our programs are developed using the latest in exercise science and fitness trends. Stay ahead with routines that are both effective and efficient—no outdated methods, just proven results.',
  },
  {
    title: 'Endless Growth Opportunities',
    description:
      'Whether you’re a beginner or building on past progress, our platform offers a wide range of workouts, challenges, and resources to keep you engaged and evolving every step of the way.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={gymContent} />
    </div>
  )
}

export default WhyChooseUs