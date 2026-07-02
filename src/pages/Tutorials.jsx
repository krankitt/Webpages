import React from "react";
import { PlayCircle, Clock, BookOpen, ArrowRight } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "React JS Full Course",
    duration: "4 Hours",
    lessons: "35 Lessons",
    image: "https://picsum.photos/500/300?random=1",
  },
  {
    id: 2,
    title: "Node JS Crash Course",
    duration: "3.5 Hours",
    lessons: "28 Lessons",
    image: "https://picsum.photos/500/300?random=2",
  },
  {
    id: 3,
    title: "MongoDB Complete Guide",
    duration: "2.5 Hours",
    lessons: "22 Lessons",
    image: "https://picsum.photos/500/300?random=3",
  },
  {
    id: 4,
    title: "Express JS Masterclass",
    duration: "3 Hours",
    lessons: "30 Lessons",
    image: "https://picsum.photos/500/300?random=4",
  },
  {
    id: 5,
    title: "Tailwind CSS Tutorial",
    duration: "2 Hours",
    lessons: "18 Lessons",
    image: "https://picsum.photos/500/300?random=5",
  },
  {
    id: 6,
    title: "JavaScript ES6 Course",
    duration: "5 Hours",
    lessons: "45 Lessons",
    image: "https://picsum.photos/500/300?random=6",
  },
];

const Tutorials = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-600 py-20 text-center">
        <h1 className="text-5xl font-bold text-white">Video Tutorials</h1>

        <p className="text-white/80 mt-4 max-w-3xl mx-auto">
          Learn programming with easy-to-follow video tutorials created by
          industry experts. Start learning today and improve your skills.
        </p>
      </div>

      {/* Tutorials */}
      <div className="w-11/12 mx-auto py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tutorials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">{item.title}</h2>

                <div className="flex justify-between mt-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    {item.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen size={18} />
                    {item.lessons}
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:scale-105 transition duration-300">
                  <PlayCircle size={20} />
                  Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-24 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl p-16 text-center text-white">
          <h2 className="text-4xl font-bold">Want to Learn More?</h2>

          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Explore our premium courses and become a Full Stack Web Developer
            with hands-on projects.
          </p>

          <button className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition duration-300">
            Explore Courses
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
