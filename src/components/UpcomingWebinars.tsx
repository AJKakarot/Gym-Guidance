'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Fitness Fundamentals for Beginners',
      description:
        'Dive into the basics of fitness training, covering workouts, rest, and goal setting for long-term success.',
      slug: 'fitness-fundamentals-for-beginners',
      isFeatured: true,
    },
    {
      title: 'Smart Meal Planning & Nutrition',
      description:
        'Learn how to fuel your body with proper nutrition and create meal plans that support your fitness goals.',
      slug: 'smart-meal-planning-nutrition',
      isFeatured: true,
    },
    {
      title: 'Strength Training Essentials',
      description:
        'Master the key movements and techniques of strength training to build muscle and avoid injuries.',
      slug: 'strength-training-essentials',
      isFeatured: true,
    },
    {
      title: 'Home Workout Hacks',
      description:
        'Get the most out of your at-home fitness sessions with minimal equipment and maximum results.',
      slug: 'home-workout-hacks',
      isFeatured: true,
    },
    {
      title: 'Boost Your Metabolism with HIIT',
      description:
        'Discover the power of high-intensity interval training and how it accelerates fat loss.',
      slug: 'boost-metabolism-hiit',
      isFeatured: true,
    },
    {
      title: 'Fitness Tracking & Motivation',
      description:
        'Learn how to stay accountable and motivated by tracking your fitness progress the right way.',
      slug: 'fitness-tracking-and-motivation',
      isFeatured: true,
    },
  ];
  
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Workout Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars