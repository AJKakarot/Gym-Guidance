'use client';

import React from 'react';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';

const programs = [
  {
    title: 'Beginner Workout Plan',
    href: '/Beginner',
    image: '/courses/home-workout.jpg',
    description: 'Start your fitness journey with an easy-to-follow beginner workout routine.',
  },
  {
    title: 'Fat Loss Plan',
    href: '/FatLoss',
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60',
    description: 'Burn fat effectively with cardio and HIIT focused training.',
  },
  {
    title: 'Meal Plan',
    href: '/Meal',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
    description: 'Fuel your body right with our healthy and balanced meal plans.',
  },
  {
    title: 'Strength Training',
    href: '/Strength',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=60',
    description: 'Build muscle and strength with focused resistance training routines.',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        {/* Title always visible with margin top */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white tracking-tight mb-10">
          Fitness Programs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <Link
              key={idx}
              href={program.href}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2">
                  {program.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
