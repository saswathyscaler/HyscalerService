import React from "react";
import wave from "../assets/wave.png";

const ReadyToChange = () => {
  const bgImageStyle = {
    backgroundImage: `url(${wave})`,
    backgroundSize: "cover",
  };
  return (
    <main
      className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 bg-blue-50 my-10"
      style={bgImageStyle}
    >
      <div className="flex flex-col items-center justify-center text-center gap-y-3 py-3">
        <h1 className="text-black lg:text-[30px] w-[90%]  md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800] lg:leading-[50px] mt-8  md:leading-[40px]   sm:leading-[30px]   xs:leading-[25px] xxs:leading-[28px] ">
          {" "}
          Ready for a Change? Switch to{" "}
          <span className="text-[#0064B0]">HyScaler</span>
        </h1>
        <p className="text-gray-600  text-base md:leading-8 xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">
          If you're experiencing dissatisfaction with your current IT vendor,
          consider making the switch to HyScaler. We specialize in ensuring a
          seamless transition and getting your project back on track.
        </p>
        <button  className="lg:w-[180px]  sm:w-[160px] xxs:w-[140px] text-[#0064B0]  md:h-[49px] xsm:h-[49px] xxs:h-[50px] rounded-[6px] border-[2px] flex justify-center items-center  border-[#1255A1]  hover:bg-[#1255A1]
        hover:text-white transition-all duration-[600ms] ease-in-out cursor-pointer tracking-normal font-[700]  leading-[24.38px] sm:text-[14px] xxs:text-[12px] ">
           Consult Our Experts
         </button>
      </div>
    </main>
  );
};

export default ReadyToChange;
