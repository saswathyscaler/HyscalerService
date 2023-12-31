import React from "react";
import decade from "../assets/trusted/decade.svg";
import certified from "../assets/trusted/certified.svg";
import global from "../assets/trusted/global.svg";
import team from "../assets/trusted/team.svg";
import globalMarket from "../assets/trusted/globalMarket.svg";
import gurentee from "../assets/trusted/gurentee.svg";
import wave from "../assets/wave.png";

const Trusted = () => {
  const bgImageStyle = {
    backgroundImage: `url(${wave})`,
    backgroundSize: "100% 50%",
    backgroundRepeat: "no-repeat",
  };
  const main = {
    background:
      "radial-gradient(circle, #83daf2, #afe1fd, #d3e8ff, #eef2ff, #ffffff)",
  };

  const gridContent = [
    {
      icon: decade,
      title: "Decades-long Experience",
      description:
        "With over  <span class='text-[#0064B0] font-[700]'>10 years</span>   of experience in software engineering and IT consulting, we bring a wealth of knowledge to your projects.",
    },
    {
      icon: team,

      title: "A Team of True Professionals",
      description:
        "Our team comprises over  <span class='text-[#0064B0] font-[700]'>180+ IT experts </span>with an average experience of<span class='text-[#0064B0] font-[700]'> 5 - 10 years </span>, ensuring top-tier skills on every project.",
    },
    {
      icon: global,

      title: "Global Presence",
      description:
        "With headquarters in <span class='text-[#0064B0] font-[700]'>India</span> , and offices in <span class='text-[#0064B0] font-[700]'>USA</span> , our talents are ready to spread their presence worldwide to serve you better.",
    },
    {
      icon: gurentee,

      title: "Guaranteed Service Quality",
      description:
        "We maintain a quality-first approach based on a mature ISO 9001-certified quality management system.",
    },
    {
      icon: certified,

      title: "Certified IT Experts",
      description:
        "Our team includes certified experts with competencies in Microsoft, AWS, Google, Oracle, ServiceNow, Salesforce, and more.",
    },
    {
      icon: globalMarket,

      title: "Trusted by Global Market",
      description:
        "We are trusted by global market leaders, and our expertise has been recognized on the Global Outsourcing 100 list by IAOP.",
    },
  ];

  return (
    <main
      className="w-full  2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 my-10    "
      style={main}
    >
      <div className="flex flex-col gap-y-3 items-center justify-center text-center  " style={bgImageStyle}>
        <h1 className="text-black text-center lg:text-[30px]   md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800] mt-8     sm:leading-[40px]   xs:leading-[25px] xxs:leading-[28px] ">
          Why Are We The Most Trusted Custom Software Development Company?
        </h1>
        <p className="text-gray-600 text-center  text-base md:leading-8 xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">
          At HyScaler, we bring your software development projects to life. Our
          team of seasoned professionals combines decades of experience in the
          IT industry with a relentless drive for innovation. We specialize in
          crafting secure, high- performance, scalable, and user-friendly
          software solutions to help your business thrive.
        </p>

        <button
          className="lg:w-[180px]  sm:w-[160px] xxs:w-[140px] text-[#0064B0]  md:h-[49px] xsm:h-[49px] xxs:h-[50px] rounded-[6px] border-[2px] flex justify-center items-center  border-[#1255A1]  hover:bg-[#1255A1]
           hover:text-white transition-all duration-[600ms] ease-in-out cursor-pointer tracking-normal font-[700]  leading-[24.38px] sm:text-[14px] xxs:text-[12px] "
        >
          Consult Our Experts
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-8 pb-5">
        {gridContent.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50% - 16px)] lg:w-[calc(25% - 16px)] lg:h-auto sm:h-auto xsm:h-[230px] border-[1px] rounded-[10px] py-4 px-2"
          >
            <div className="bg-blue-50 sm:w-20 sm:h-20 w-16 h-16 flex justify-center items-center rounded-full">
              <img
                src={item.icon}
                alt={item.title}
                className="md:w-auto md:h-auto xxs:w-11  xxs:h-11 "
              />
            </div>

            <h1 className="text-[1rem]  md:text-[1.2rem] xl:text-[1.3rem] font-semibold my-3">
              {item.title}
            </h1>
            <p
              className="text-[#495459] text-base sm:text-[1rem] font-medium"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Trusted;
