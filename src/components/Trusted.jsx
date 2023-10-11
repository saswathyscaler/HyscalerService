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
      filter: "brightness(100%)"
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
    <main className="w-full  2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 my-10  bg-[#fff]  " >
      <div className="flex flex-col gap-y-6" style={bgImageStyle}>
        <h1 className="text-black lg:text-[42px] font-[800] lg:leading-[50px] mt-8 md:text-[35px]  md:leading-[40px] sm:text-[25px]  sm:leading-[30px]  xs:text-[20px]  xs:leading-[25px] xxs:leading-[28px] xxs:text-[20px] text-center ">
          Why Are We The Most Trusted Custom Software Development Company?
        </h1>
        <div className="text-gray-600  text-base xl:leading-8 lg:text-[18px] font-[500]   md:text-[16px] xxs:leading-7 xxs:text-sm  mt-3 lg:mt-3  text-center  ">
          At HyScaler, we bring your software development projects to life. Our
          team of seasoned professionals combines decades of experience in the
          IT industry with a relentless drive for innovation. We specialize in
          crafting secure, high- performance, scalable, and user-friendly
          software solutions to help your business thrive.
        </div>

        <div className="lg:w-[300px] md:w-[270px] sm:w-[230px] xsm:w-[180px] xxs:w-[140px] text-[#0064B0]  md:h-[70px] xsm:h-[60px] xxs:h-[55px] rounded-[6px] border-[2px] flex mx-auto justify-center items-center  border-[#1255A1]  hover:bg-[#1255A1] hover:text-white transition-all duration-[600ms] ease-in-out cursor-pointer w-[230px]">
          <button className="tracking-normal font-[700] md:text-[20px] leading-[24.38px] xsm:text-[14px] xxs:text-[12px]">
            Consult Our Experts
          </button>
        </div>
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

            <h1 className="text-xl sm:text-[] lg:text-[1.2rem] xl:text-[1.3rem] font-semibold my-3">
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
