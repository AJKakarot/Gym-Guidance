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

const strengthWorkouts = [
  {
    id: 1,
    title: 'Full Body Strength',
    image:
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=60',
    description: 'A balanced routine focusing on compound movements for total body strength.',
  },
  {
    id: 2,
    title: 'Upper Body Power',
    image:
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=60',
    description: 'Chest, back, shoulders, and arms workout to build upper body power.',
  },
];

export default function StrengthTrainingPage() {
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
          Strength Training Plan
        </h1>

        <ul className="text-neutral-300 list-disc list-inside space-y-2 text-base md:text-lg mb-10">
          <li>✔️ Focus on progressive overload to build strength</li>
          <li>✔️ Include compound lifts like squats, deadlifts, and bench press</li>
          <li>✔️ Maintain proper form and rest between sets</li>
          <li>✔️ Ensure proper nutrition and recovery to support muscle growth</li>
          <li>✔️ Stay consistent and track your progress</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {strengthWorkouts.map((workout) => (
            <div key={workout.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <Image
                src={workout.image}
                alt={workout.title}
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
              <h2 className="text-lg font-semibold text-black dark:text-white mt-2">
                {workout.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {workout.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">Contact Us</h2>
          <p className="text-neutral-500 text-sm mb-4">
            We&apos;re here to support your strength training goals. Contact us with any questions or guidance you need for your fitness plan.
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