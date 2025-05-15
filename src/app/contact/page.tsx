'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BackgroundBeams } from '@/components/ui/background-beams';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,   // <-- added reset here
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post('https://getform.io/f/apjnoqra', data);
      toast.success('Message sent successfully!');
      reset();  // <-- clear form fields here
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-24 sm:pt-36 relative px-4">
  <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
  <div className="max-w-xl sm:max-w-2xl mx-auto p-4 relative z-10">
    <h1 className="text-lg sm:text-4xl md:text-7xl text-center font-sans font-bold mb-6 sm:mb-8 text-white">
      Contact Us
    </h1>
    <p className="text-neutral-500 max-w-md sm:max-w-lg mx-auto my-2 text-sm sm:text-base text-center">
      We&apos;re here to help with any questions about our workouts, programs, or fitness events. Reach out and let us support you on your fitness journey.
    </p>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
      <input
        {...register('name', { required: true })}
        placeholder="Your full name"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-3 sm:p-4 bg-neutral-950 text-white placeholder:text-neutral-700 text-sm sm:text-base"
      />
      {errors.name && (
        <p className="text-red-500 text-xs sm:text-sm">Name is required</p>
      )}

      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Your email address"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-3 sm:p-4 bg-neutral-950 text-white placeholder:text-neutral-700 text-sm sm:text-base"
      />
      {errors.email && (
        <p className="text-red-500 text-xs sm:text-sm">Email is required</p>
      )}

      <textarea
        {...register('message', { required: true })}
        placeholder="Your message"
        rows={4}
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-3 sm:p-4 bg-neutral-950 text-white placeholder:text-neutral-700 text-sm sm:text-base"
      />
      {errors.message && (
        <p className="text-red-500 text-xs sm:text-sm">Message is required</p>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
  );
}
