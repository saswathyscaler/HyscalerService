import React from "react";
import devLogo from "../assets/devlogo.png";

const DevelopMentSteps = () => {
  const divContent = [
    {
      title: "Planning",
    },
    {
      title: "Design",
    },
    {
      title: "Development",
    },
    {
      title: "Support",
    },
    {
      title: "Deployment",
    },
    {
      title: "Testing",
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
    <section className="my-5 mx-auto items-center 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 lg:gap-6 sm:gap-5 xxs:gap-3 text-center">
      <div className="relative lg:h-[600px] md:h-[600px] sm:h-[550px]  xsm:h-[990px] xxs:h-[1150px] flex flex-col items-center ">
        <div className="flex flex-col items-center gap-y-10 lg:gap-y-[5rem] md:gap-y-[6rem] sm:gap-y-[6rem] absolute  z-40">
          <div className=" flex flex-col gap-y-1 text-left">
            <h1 className="text-left bg-white w-fit pr-2 inline xl:text-[2.2rem] xxs:leading-5 sm:leading-[66px] font-[800]  lg:text-[35px] md:text-[35px] xxs:text-[1.3rem] ">
              Our Software Development Steps
            </h1>
            <div className="font-[500] xl:w-[79%] lg:w-[80%] md:w-[92%] sm:w-[90%] sm:leading-[1.8rem] xxs:leading-8 text-[#495459] xl:text-[1.2rem] text-[1rem]">
              Our software development process is a well-oiled machine designed
              to deliver results. We follow industry best practices and a mature
              development methodology to ensure your project's success. Our
              process includes:
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-y-8 gap-x-4 w-[80%] mx-auto z-40">
            {divContent.map((item, index) => (
              <div
                key={index}
                className="sm:w-[90%]   md:h-[8rem]  xxs:h-[6rem] border-2 border-[#0068FF] rounded-[15px] flex flex-col items-center justify-center shadow-custom bg-white"
              >
                <img
                  src={devLogo}
                  alt={item.title}
                  className="md:w-9 xsm:w-8 xxs:w-8"
                />
                <h3 className="md:text-[1.3rem] xsx:text-[1rem] text-[#0068FF] font-semibold leading-16 text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="z-0 xxs:mt-[42rem] xsm:mt-[34.2rem] xs:mt-[34.9rem] border-blue-500 border-dashed border-t-2 h-2 xxs:w-[650px] sm:hidden transform rotate-90"></div>

        <div className="sm:w-[90%] sm:h-[90%] xxs:w-0 xxs:h-0  flex flex-col items-center justify-start z-0">
          <div className="w-full lg:h-[9rem] md:h-[10rem] sm:h-[12rem] mt-[2.1rem] border-2  border-[#0064B0] border-dashed border-l-0 border-b-0 "></div>

          <div className="w-full md:h-[7.5rem] sm:h-[6.5rem]  border-2  border-[#0064B0] border-dashed border-r-0 "></div>

          <div className="w-full md:h-[10.5rem] sm:h-[8rem] relative">
            <div className="absolute inset-0 border-2  border-[#0064B0] border-dashed border-l-0 border-t-0"></div>
            <div className="absolute top-6 left-0 w-[15%] h-full bg-white"></div>
          </div>

          {/*           <div className="w-full border-2  border-[#0064B0] border-dashed border-l-0 border-t-0 "></div>
           */}
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
