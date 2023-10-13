import React from "react";
import planning from "../assets/devsteps/planing.svg";
import deploy from "../assets/devsteps/deploy.svg";
import design from "../assets/devsteps/design.svg";
import support from "../assets/devsteps/support.svg";
import development from "../assets/devsteps/development.svg";
import testing from "../assets/devsteps/testing.svg";

const DevelopMentSteps = () => {
  const divContent = [
    {
      title: "Planning",
      icon: planning,
    },
    {
      title: "Design",
      icon: design,
    },
    {
      title: "Development",
      icon: development,
    },
    {
      title: "Support",
      icon: support,
    },
    {
      title: "Deployment",
      icon: deploy,

    },
    {
      title: "Testing",
      icon: testing,
    },
  ];

  const contentData = [
    {
      title: "Planning:",
      description:
        "  We work closely with you to define project goals, scope, and requirements.",
    },
    {
      title: "Design:",
      description:
        "  Our team creates intuitive and visually appealing user interfaces.",
    },
    {
      title: "Testing:",
      description:
        "  Rigorous testing ensures that your software functions flawlessly.",
    },
    {
      title: "Development:",
      description:
        "  Skilled developers bring your software to life with clean, efficient code.",
    },
    {
      title: "Support and Maintenance:",
      description:
        "   Our commitment doesn't end at deployment; we provide ongoing support and maintenance to keep your software running smoothly.",
    },
  ];

  return (
    <section className="my-10 mx-auto items-center 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 lg:gap-6 sm:gap-5 xxs:gap-3 text-center">
      <div className="relative 2xl:he-[800px] lg:h-[600px] md:h-[600px] sm:h-[550px]  xsm:h-[640px] xxs:h-[650px]  flex flex-col items-center ">
        <div className="flex flex-col items-center gap-y-10 2xl:gap-y-[6rem] lg:gap-y-[5rem] md:gap-y-[6rem] sm:gap-y-[5rem] xs:gap-y-[4.5rem] xsm:gap-y-[5rem]  xxs:gap-y-[5rem] absolute  z-40">
          <div className=" flex flex-col gap-y-1 text-left">
            <h1 className="text-left bg-white 
            xxmm:max-w-[82%] xs:max-w-[95%] xxs:max-w-[90%] w-fit pr-2 inline xl:text-[2.2rem] xxs:leading-7 md:leading-[66px]  sm:leading-8 font-[800]  lg:text-[35px] md:text-[35px] xsm:text-[20px]  xxs:text-[20px] ">
              Our Software Development Steps
            </h1>
            <p
              className="font-[500] 2xl:w-[72%]  xl:w-[80%] lg:w-[80%] md:w-[92%] sm:w-[90%] xs:w-[87%]  xsm:w-[85%]  xxs:w-[95%]
               xxs:leading-[1.5rem] sm:leading-[1.8rem]
             xs:leading-[1.6rem] xsm:leading-[1.6rem] text-[#495459]  xl:text-[1.2rem]  sm:text-[1rem] text-[0.8rem]"
            >
              Our software development process is a well-oiled machine designed
              to deliver results. We follow industry best practices and a mature
              development methodology to ensure your project's success. Our
              process includes:
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xxs:px-4 xxs:gap-y-5 xxs:gap-x-6  xs:gap-y-6 sm:gap-y-8 gap-x-4 xxs:w-[95%] xsm:w-[80%] mx-auto z-40">
            {divContent.map((item, index) => (
              <div
                key={index}
                className="  2xl:h-[9rem] lg:h-[8rem]  md:h-[7rem] sm:h-[6rem]  xsm:w-[90%] xxs:h-[5rem]  border-2 border-[#0068FF] rounded-[15px] flex flex-col items-center justify-center shadow-[4px_4px_2px_2px_#0064B0]   bg-white"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="md:w-10 xsm:w-8 xxs:w-7"
                />
                <h3 className="md:text-[1.1rem]  lg:text-[1.4rem] xxs:text-[0.8rem]  sm:text-[0.9rem] text-[#0068FF] font-semibold leading-16 text-center ">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className= "  xs:h-[93%]  xs:w-[95%]   flex flex-col items-center justify-start z-0">
          {/* DASSHED --DIV----1\ */}
          <div
            className="w-full  2xl:h-[10  rem]  lg:h-[10rem] md:h-[12rem] sm:h-[12rem]  xs:h-[10rem]  xsm:h-[14rem] xxs:h-[17rem]
            md:mt-[2.1rem] sm:mt-[1.2rem]  xsm:mt-[0.7rem] mt-1 border-2  border-[#0064B0] border-dashed border-l-0 border-b-0 "
          ></div>
          {/* DASSHED --DIV---2\ */}

          <div className="w-full 2xl:h-[8.5rem] lg:h-[7rem] md:h-[6rem] sm:h-[5rem] xs:h-[5.2rem]  xxs:h-0 border-2  border-[#0064B0] border-dashed border-r-0 "></div>
          {/* DASSHED --DIV---3\ */}

          <div className="w-full 2xl:h-[11rem] lg:h-[10rem] md:h-[9rem] sm:h-[7.6rem]  xs:h-[6.7rem]  xxs:h-0 relative">
            <div className="absolute inset-0 border-2  border-[#0064B0] border-dashed border-l-0 border-t-0"></div>
            <div className="absolute top-6 left-0  sm:w-[15%] h-full bg-white"></div>
          </div>

          {/* DASSHED --DIV--4\ */}

          <div className="w-full relative sm:h-0 sm:w-0   xs:h-[6rem] xsm:h-[6rem]  xxs:h-0 border-2  border-[#0064B0] border-dashed border-t-0 border-r-0 ">
            <div className="absolute top-6 right-0  w-[15%] h-full bg-white"></div>
          </div>
        </div>
      </div>

      <div className=" h-auto w-full   pb-10 ">
        <div className=" h-auto flex flex-col  lg:gap-y-5 xxs:gap-y-4 text-left ">
          {contentData.map((item, index) => (
            <div key={index} className="">
              <h1 className="flex font-[700] lg:text-[1rem] xm:text-[18px]  leading-5 w-full">
                <span className="flex lg:w-[12px] lg:h-[12px] xsm:w-[10px] xsm:h-[10px] xxs:w-2 xxs:h-2 bg-[#0064B0] mt-1  xsm:mr-4  xxs:mr-2 w-[10%]"></span>
                <span className="w-[90%]">
                  {item.title}
                  <span className="font-[500] xxs:text-[14px] sm:text-[1rem]   lg:leading-6 xxs:leading-[24px] ">
                    {item.description}
                  </span>
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopMentSteps;
