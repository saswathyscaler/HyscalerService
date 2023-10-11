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
      <div className="flex flex-col items-center justify-center text-center gap-y-3 py-7">
        <h1 className="text-black lg:text-[42px] font-[800] lg:leading-[50px] mt-8 md:text-[35px]  md:leading-[40px] sm:text-[25px]  sm:leading-[30px]  xs:text-[20px]  xs:leading-[25px] xxs:leading-[28px] xxs:text-[20px] ">
          {" "}
          Ready for a Change? Switch to{" "}
          <span className="text-[#0064B0]">HyScaler</span>
        </h1>
        <div className="text-gray-600  text-base xl:leading-8 lg:text-[18px] font-[500]   md:text-[16px] xxs:leading-7 xxs:text-sm  mt-3 lg:mt-3  text-center  ">
          If you're experiencing dissatisfaction with your current IT vendor,
          consider making the switch to HyScaler. We specialize in ensuring a
          seamless transition and getting your project back on track.
        </div>
        <div className="lg:w-[300px] md:w-[270px] sm:w-[230px] xsm:w-[180px] xxs:w-[140px] text-[#0064B0]  md:h-[70px] xsm:h-[60px] xxs:h-[55px] rounded-[6px] border-[2px] flex mx-auto justify-center items-center  border-[#1255A1]  hover:bg-[#1255A1] hover:text-white transition-all duration-[600ms] ease-in-out cursor-pointer w-[230px] mt-2 ">
          <button className="tracking-normal font-[700] md:text-[20px] leading-[24.38px] xsm:text-[14px] xxs:text-[12px]">
            Consult Our Experts
          </button>
        </div>
      </div>
    </main>
  );
};

export default ReadyToChange;
