// import Navbar from "./Navbar";
// import bg from "../assets/bg1.png";

// const Home = () => {
//   const bgImageStyle = {
//     backgroundImage: `url(${bg})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     width: "100%",
//   };

//   return (
//     <div>
//       <div className=" text-white min-h-screen  " >
//         <Navbar />
//       </div>
//     </div>
//   );
// };

// export default Home;

import wave from '../assets/homeVector.png'
import React from "react";
import { useState, useEffect } from "react";
import "../styles/mouse.css";
import mouse from "../assets/mouse.svg";
import Navbar from "./Navbar";

const Home = () => {


  const bgImageStyle = {
    backgroundImage: `url(${wave})`, 
  backgroundColor:' #0064B0', 
  backgroundSize: "cover",
       
  };


  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mouseClass = scrolled ? "animated-mouse" : "";

  return (
    <>
      <main className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5  
    
       text-white h-[35rem] pb-2 flex"  style={bgImageStyle}>
        <div className="flex justify-between items-center text-[#FFFFFF] w-full">
          <div className="md:w-[80%] w-full   md:basis-4/6 ">
          
            <h1 className="w-full font-[800] lg:text-[55px] xl:text-[65px] xl:leading-[65px]  md:text-left text-center lg:leading-[60px] md:leading-[50px] md:text-[50px] sm:text-[35px] tracking-normal xxs:leading-10 xxs:text-[30px] xxs:pb-4 ">
              Custom Software Development
            </h1>

            <p className="h-auto md:font-[700] xs:font[600] xxs:font-[600] 2xl:text-[24px] md:text-[20px] sm:text-[18px] xl:leading-[30px] md:text-left text-center tracking-normal leading-[38px] xxs:leading-6 xsm:text-[16px] xxs:text-[14px] sm:px-0 px-2  mt-4">
              Tailored software development services designed to scale and
              address your unique business requirements.
            </p>

            <div className="lg:w-[300px] md:w-[270px] sm:w-[230px] xsm:w-[180px] xxs:w-[140px] text-[#fff] md:h-[70px] xsm:h-[60px] xxs:h-[55px] rounded-[6px] border-[2px] flex md:mx-0 xxs:mx-auto justify-center items-center mt-14 hover:bg-[#fff] hover:text-[#0064B0] transition-all duration-[600ms] ease-in-out cursor-pointer w-[230px]">
              <button className="tracking-normal font-[700] md:text-[20px] leading-[24.38px] xsm:text-[14px] xxs:text-[12px]">
                Consult Our Experts
              </button>
            </div>
          </div>

          <div className="md:flex xxs:hidden flex-col items-center relative right-0">
            <div className="h-[240px] w-[2px] bg-white"></div>
            <div className="transform rotate-[-90deg] w-[96px] h-[15px] text-white text-center text-xs font-semibold uppercase relative top-14">
              Scroll down
            </div>
            <img
              src={mouse}
              alt=""
              className={`relative top-[110px] w-[24px] h-[24px] ${mouseClass}`}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
