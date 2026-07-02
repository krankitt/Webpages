// import { useRef } from "react";
// import "./App.css";
// import Buttons from "./components/Buttons";
// import Cards from "./components/Cards";
// import videofile from "./assets/mov_bbb.mp4";
// import { Play } from "lucide-react";

// function App() {
//   const data = [
//     {
//       img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
//       title: "Welcome to react",
//       description:
//         "Build modern and responsive web applications using React and Tailwind CSS.",
//       extra: <Buttons>Read More</Buttons>,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1774173511909-3a9f9ab208cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Welcome to react",
//       description:
//         "Build modern and responsive web applications using React and Tailwind CSS.",
//       extra: <Buttons>Read More</Buttons>,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1777812744279-864ec84f9b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       title: "Welcome to react",
//       description:
//         "Build modern and responsive web applications using React and Tailwind CSS.",
//       extra: <Buttons>Read More</Buttons>,
//     },
//   ];

//   const playPuase = () => {
//     const video = videoRef.current;
//     const isPaused = video.paused;
//     if (isPaused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   };

//   const videoRef = useRef();

//   return (
//     <div>
//       <div className="flex gap-2 p-2">
//         {data.map((item, idx) => (
//           <Cards
//             key={idx}
//             img={item.img}
//             tittle={item.title}
//             desc={item.description}
//             btn={item.extra}
//           />
//         ))}
//       </div>
//       <video ref={videoRef} src={videofile} controls width="500" />
//       <button
//         onClick={playPuase}
//         className="flex gap-3 bg-gray-500 p-3 m-2 rounded-lg text-white "
//       >
//         <Play /> Play
//       </button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const App = () => {
//   const data = {
//     name: "Ankit",
//     roll: "22",
//     subject: "Hindi",
//   };

//   console.log(data);

//   return (
//     <div className="bg-gray-200 p-4">
//       <h1 className="text-4xl font-bold">Name : {data.name}</h1>
//       <h1 className="text-4xl font-bold">Roll : {data.roll}</h1>
//       <h1 className="text-4xl font-bold">
//         Subject : {data?.subject || "English"}
//       </h1>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import img from "./assets/1.jpg";
// import { EyeClosed, EyeIcon } from "lucide-react";

// const App = () => {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       {show && <img src={img} alt="#" />}
//       <button
//         className="bg-red-500 p-2 rounded m-2 text-white flex gap-2"
//         onClick={() => setShow(!show)}
//       >
//         {show ? "hide" : "show"}
//         {show ? <EyeClosed size={18} /> : <EyeIcon size={18} />}
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import img from "./assets/1.jpg";
// import {
//   AlignLeft,
//   Apple,
//   HomeIcon,
//   LayoutDashboard,
//   LogOut,
// } from "lucide-react";

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const menus = [
//     {
//       label: "Homepage",
//       icons: <HomeIcon />,
//       link: "#",
//     },
//     {
//       label: "Dashboard",
//       icons: <LayoutDashboard />,
//       link: "#",
//     },
//     {
//       label: "Applocation",
//       icons: <Apple />,
//       link: "#",
//     },
//     {
//       label: "Logout",
//       icons: <LogOut />,
//       link: "#",
//     },
//   ];
//   return (
//     <div>
//       <div
//         style={{
//           left: open ? 0 : -280,
//           transition: "300ms",
//         }}
//         className="bg-white fixed top-0 left-0 w-[280px] shadow-2xl h-full p-4 border-r border-r-gray-100"
//       >
//         <img src={img} alt="" className="rounded-full w-20 h-20 shadow-lg" />
//         <div className="m-4">
//           <h1 className="text-lg font-medium">Ankit Kumar</h1>
//           <p className="text-black/60">ankitkumar@gmail.com</p>
//         </div>
//         <div className="mt-8 mx-3 space-y-2">
//           {menus.map((item, idx) => (
//             <a
//               key={idx}
//               href={item.link}
//               className="flex items-center gap-2 text-black/80 hover:bg-gray-200 p-3 rounded-lg transition duration-300"
//             >
//               {item.icons}
//               <p>{item.label}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//       <div>
//         <nav className="bg-violet-600 p-4 flex items-center justify-between px-6">
//           <h1 className="text-lg font-semibold">Branding</h1>
//           <button
//             className="bg-violet-500 p-2 rounded hover:bg-rose-600 text-white"
//             onClick={() => setOpen(!open)}
//           >
//             <AlignLeft />
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default App;

// import { Plus } from "lucide-react";
// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState("");
//   const [items, setItems] = useState([]);

//   const addData = () => {
//     setItems([...items, value]);
//   };

//   return (
//     <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-lg w-xl">
//         <h1 className="text-2xl font-bold">Todo Manager</h1>
//         <input
//           type="text"
//           className="bg-rose-500 w-full p-3 rounded mt-4 text-white font-bold"
//           placeholder="Task List"
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button
//           className="bg-rose-600 flex gap-2 px-4 py-3 rounded mt-3 text-white font-bold"
//           onClick={addData}
//         >
//           <Plus />
//           Add
//         </button>
//         <div className="mt-5 bg-gray-200 rounded-lg p-6 space-y-3">
//           {items.map((data, idx) => (
//             <div className="bg-white p-3 rounded" key={idx}>
//               {data}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { Home, Sigma } from "lucide-react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "./pages/Course";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import Tutorials from "./pages/Tutorials";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "animate.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/course" element={<Course />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
