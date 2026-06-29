import { ArrowRight, Bird } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const menus = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Course",
      link: "/course",
    },
    {
      label: "Tutorials",
      link: "/tutorials",
    },
    {
      label: "Contact us",
      link: "/contact-us",
    },
  ];
  return (
    <div>
      <nav className="border border-b-slate-100 p-8 bg-white flex items-center justify-around sticky top-0 left-0 z-20">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-t from-sky-500 to-indigo-500 w-11 h-11 rounded-full flex items-center justify-center">
            <Bird className="text-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-blue-600">Birdling</h1>
            <p className="text-sky-500 font-medium text-xs">
              Making Learning Easier!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12">
          {menus.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="text-black/60 font-medium hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <Link
            to="/login"
            className="text-black/60 font-medium hover:text-black"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="flex item-center gap-2 bg-linear-to-r from-sky-500 to-indigo-500 text-white px-8 py-2.5 rounded-lg font-medium hover:scale-105 trasition duration-300"
          >
            <ArrowRight />
            Signup
          </Link>
        </div>
      </nav>
      <section className="w-full mx-auto">
        <Outlet />
      </section>
      <footer className="h-[500px] bg-linear-to-t from-blue-500 to-indigo-500 rounded-t-[100px] p-24">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-bold text-white">Birdling</h1>
            <p className="text-white/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis aliquid nihil maxime iste odit voluptatibus accusamus
              officiis, exercitationem culpa consequuntur, adipisci sed
              provident laboriosam quod cupiditate ullam error iusto?
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Tutorials</h1>
            <p className="text-white/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis aliquid nihil maxime iste odit voluptatibus accusamus
              officiis, exercitationem culpa consequuntur, adipisci sed
              provident laboriosam quod cupiditate ullam error iusto?
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Course</h1>
            <p className="text-white/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis aliquid nihil maxime iste odit voluptatibus accusamus
              officiis, exercitationem culpa consequuntur, adipisci sed
              provident laboriosam quod cupiditate ullam error iusto?
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Contact us</h1>
            <p className="text-white/75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              facilis aliquid nihil maxime iste odit voluptatibus accusamus
              officiis, exercitationem culpa consequuntur, adipisci sed
              provident laboriosam quod cupiditate ullam error iusto?
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
