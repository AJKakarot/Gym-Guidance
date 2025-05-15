'use client';

import React from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BackgroundBeams } from '@/components/ui/background-beams';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const mealPlans = [
  {
    id: 1,
    title: 'High Protein Breakfast',
    image:
      '/courses/nutrition.jpg',
    description: 'Eggs, oats, and fruit to start your day strong.'
  },
  {
    id: 2,
    title: 'Balanced Lunch',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
    description: 'Grilled chicken, quinoa, and mixed vegetables.'
  },
];

export default function MealPlanPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await fetch('https://getform.io/f/apjnoqra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      toast.success('Message sent successfully');
      reset();
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <Toaster position="top-center" />
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-3xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
          Meal Plan for Fitness
        </h1>

        <ul className="text-neutral-300 list-disc list-inside space-y-2 text-base md:text-lg mb-10">
          <li>✔️ Eat protein with every meal to support muscle recovery</li>
          <li>✔️ Incorporate healthy fats like nuts and olive oil</li>
          <li>✔️ Stay hydrated — drink at least 2 liters of water daily</li>
          <li>✔️ Avoid processed sugars and refined carbs</li>
          <li>✔️ Focus on whole foods and balanced nutrition</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mealPlans.map((meal) => (
            <div key={meal.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <Image
                src={meal.image}
                alt={meal.title}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <h2 className="text-lg font-semibold text-black dark:text-white mt-2">
                {meal.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {meal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Contact Us</h2>
          <p className="text-neutral-500 text-sm mb-4">
            We’re here to help with any questions about our meal plans, nutrition tips, or diet programs. Reach out and let us support you on your fitness journey.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register('name', { required: true })}
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-neutral-950 border border-neutral-800 text-white"
            />
            {errors.name && <p className="text-red-500 text-xs">Name is required</p>}

            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-neutral-950 border border-neutral-800 text-white"
            />
            {errors.email && <p className="text-red-500 text-xs">Email is required</p>}

            <textarea
              {...register('message', { required: true })}
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-md bg-neutral-950 border border-neutral-800 text-white"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs">Message is required</p>}

            <button
              type="submit"
              className="w-full px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}