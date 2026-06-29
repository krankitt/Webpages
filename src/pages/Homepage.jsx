import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Accessibility,
  ArrowRight,
  Bell,
  Copy,
  CopyCheck,
  Home,
  icons,
  LayoutDashboard,
  PlayCircleIcon,
  Settings2,
} from "lucide-react";
import s1 from "../assets/s1.avif";
import t1 from "../assets/reactjs.jpeg";
import t2 from "../assets/nodejs.png";
import t3 from "../assets/mongoDB.png";
import t4 from "../assets/java-programming.jpg";
import t5 from "../assets/python.jpg";
import t6 from "../assets/c++.png";

const courses = [
  {
    id: 1,
    image: t1,
    name: "React JS Course",
    price: 2999,
  },
  {
    id: 2,
    image: t2,
    name: "Node.js Course",
    price: 3499,
  },
  {
    id: 3,
    image: t3,
    name: "MongoDB Course",
    price: 2499,
  },
  {
    id: 4,
    image: t4,
    name: "Java Course",
    price: 3999,
  },
  {
    id: 5,
    image: t5,
    name: "Python Course",
    price: 2799,
  },
  {
    id: 6,
    image: t6,
    name: "C++ Course",
    price: 3199,
  },
];

const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library for building fast and interactive user interfaces.",
  },
  {
    id: 2,
    question: "Who can join this course?",
    answer:
      "Anyone interested in web development can join. No prior experience is required.",
  },
  {
    id: 3,
    question: "Will I get a certificate?",
    answer:
      "Yes, you will receive a certificate after successfully completing the course.",
  },
  {
    id: 4,
    question: "How long will I have access to the course?",
    answer:
      "You will have lifetime access to all course materials and future updates.",
  },
];

const featured = [
  {
    id: 1,
    icon: <Home />,
    bgColor: "bg-rose-500",
    title: "Homepage",
    description:
      "React is a JavaScript library for building fast and interactive user interfaces.",
  },
  {
    id: 2,
    icon: <Settings2 />,
    bgColor: "bg-amber-500",
    title: "Settings",
    description:
      "Anyone interested in web development can join. No prior experience is required.",
  },
  {
    id: 3,
    icon: <CopyCheck />,
    bgColor: "bg-indigo-500",
    title: "Copied",
    description:
      "Yes, you will receive a certificate after successfully completing the course.",
  },
  {
    id: 4,
    icon: <LayoutDashboard />,
    bgColor: "bg-green-500",
    title: "Layout & Design",
    description:
      "You will have lifetime access to all course materials and future updates.",
  },
  {
    id: 5,
    icon: <Bell />,
    bgColor: "bg-violet-500",
    title: "Notifications",
    description:
      "No, this course is beginner-friendly and starts from the fundamentals before moving to advanced concepts.",
  },
  {
    id: 6,
    icon: <PlayCircleIcon />,
    bgColor: "bg-indigo-500",
    title: "Play and Enjoy",
    description:
      "Yes, you can watch the course on your mobile, tablet, or desktop anytime using your account.",
  },
];

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="h-[500px] animate__animated animate__fadeIn">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex justify-center flex-col h-full">
                  <h1 className="text-7xl font-semibold">
                    React Course for beginner!
                  </h1>
                  <p className="text-3xl font-semibold mt-4">
                    learn to design website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, nulla quasi. Magni deleniti non fugit, ratione
                    harum illum fuga perferendis itaque, quod repellat aperiam,
                    obcaecati dicta voluptatem beatae. Iure, sed!
                  </p>
                  <div className="flex gap-4 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      Watch Video
                    </button>
                    <button className="flex item-center gap-3 bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      <ArrowRight />
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={s1}
                    alt="s1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex justify-center flex-col h-full">
                  <h1 className="text-7xl font-semibold">
                    React Course for beginner!
                  </h1>
                  <p className="text-3xl font-semibold mt-4">
                    learn to design website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, nulla quasi. Magni deleniti non fugit, ratione
                    harum illum fuga perferendis itaque, quod repellat aperiam,
                    obcaecati dicta voluptatem beatae. Iure, sed!
                  </p>
                  <div className="flex gap-4 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      Watch Video
                    </button>
                    <button className="flex item-center gap-3 bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      <ArrowRight />
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={s1}
                    alt="s1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="w-10/12 mx-auto h-full grid grid-cols-2 gap-8">
                <div className="flex justify-center flex-col h-full">
                  <h1 className="text-7xl font-semibold">
                    React Course for beginner!
                  </h1>
                  <p className="text-3xl font-semibold mt-4">
                    learn to design website
                  </p>
                  <p className="mt-3 text-black/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, nulla quasi. Magni deleniti non fugit, ratione
                    harum illum fuga perferendis itaque, quod repellat aperiam,
                    obcaecati dicta voluptatem beatae. Iure, sed!
                  </p>
                  <div className="flex gap-4 mt-8">
                    <button className="bg-rose-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      Watch Video
                    </button>
                    <button className="flex item-center gap-3 bg-violet-600 text-white font-medium px-8 rounded-lg py-2.5 hover:scale-110 transition duration-300 active:scale-80 shadow">
                      <ArrowRight />
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={s1}
                    alt="s1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="px-24 py-20 bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Recommended Course!</h1>
          <p className="text-black/60 text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione
            praesentium pariatur quidem libero possimus minima. Natus nisi
            quaerat, itaque optio fuga tempore commodi voluptatibus molestias
            aperiam, assumenda inventore. Omnis.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16">
          {courses.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg">
              <img
                src={item.image}
                alt=""
                className="h-[180px] w-full rounded-t"
              />
              <div className="px-6 py-3">
                <h1 className="text-lg font-medium">{item.name}</h1>
                <p className="text-black/80">₹{item.price}</p>
                <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white w-full py-2.5 rounded-lg mt-4 hover:scale-110 duration-300 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-24 py-20 bg-white">
        <div className="text-center w-10/12 mx-auto">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="text-base text-black/70 mt-3">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime hic
            delectus ex iure. Doloribus debitis dolores tenetur laudantium
            commodi. Iste quibusdam totam doloribus, odio delectus corporis
            exercitationem molestias nihil. Accusantium!
          </p>
        </div>
        <div className="w-10/12 mt-16 mx-auto space-y-6">
          {faqs.map((item) => (
            <div className="rounded-lg grid grid-cols shadow-lg" key={item.id}>
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === item.id ? null : item.id)
                }
                className="bg-linear-to-t from-sky-500 to-indigo-500 text-left p-5 rounded-t-lg text-white font-medium text-lg"
              >
                {item.question}
              </button>
              <div
                className="p-5 text-gray-500"
                style={{
                  height: activeIndex === item.id ? "auto" : 0,
                  padding: activeIndex === item.id ? 20 : 0,
                  overflow: "hidden",
                  transition: "300ms",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-24 py-20 bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Featured Section</h1>
          <p className="text-black/60 text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione
            praesentium pariatur quidem libero possimus minima. Natus nisi
            quaerat, itaque optio fuga tempore commodi voluptatibus molestias
            aperiam, assumenda inventore. Omnis.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-16">
          {featured.map((item, idx) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-lg shadow-lg hover:scale-105 transition duration-300`}
            >
              <div className="px-6 py-8 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                  {item.icon}
                </div>
                <h1 className="text-xl font-bold mt-3 mb-2 text-white">
                  {item.title}
                </h1>
                <p className="text-black/80 text-center text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
