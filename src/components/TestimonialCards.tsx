'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const gymSchoolTestimonials = [
  {
    quote:
      'Joining this gym program completely changed my approach to fitness. The trainers are top-notch and the routines are perfectly tailored for beginners.',
    name: 'Alex Johnson',
    title: 'Beginner Member',
  },
  {
    quote:
      "The support and motivation I have received here are incredible. I've improved my strength and consistency thanks to their holistic training plans.",
    name: 'Samantha Lee',
    title: 'Strength Training Enthusiast',
  },
  {
    quote:
      "I used to feel lost at the gym, but now I have the confidence and knowledge to train effectively. Huge thanks to the team for their personalized coaching!",
    name: 'Michael Chen',
    title: 'First-Time Gym-Goer',
  },
  {
    quote:
      'As someone who struggled with mobility and flexibility, the trainers here really helped me improve. The progress I’ve seen is amazing.',
    name: 'Emily Taylor',
    title: 'Flexibility Program Member',
  },
  {
    quote:
      'The HIIT sessions and nutrition guidance helped me shed fat and build lean muscle. Highly recommend it for anyone starting out on their fitness journey!',
    name: 'Ajeet Gupta',
    title: 'HIIT & Nutrition Program Member',
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={gymSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials