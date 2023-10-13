import React from "react";
import planning from "../assets/devsteps/planing.svg";
import deploy from "../assets/devsteps/deploy.svg";
import design from "../assets/devsteps/design.svg";
import support from "../assets/devsteps/support.svg";
import development from "../assets/devsteps/development.svg";
import testing from "../assets/devsteps/testing.svg";
const divContent1 = [
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
];

const divContent2 = [
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

const DevSteps = () => {
  return (
    <main className="my-10 mx-auto items-center 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 lg:gap-6 sm:gap-5 xxs:gap-3 text-center">
      <section className="relative bg-blue-200">
        <div className="w-full 2xl:h-[10rem] lg:h-[7rem] md:h-[8rem] sm:h-[9rem]  xs:h-[10rem]  xsm:h-[14rem] xxs:h-[17rem] md:mt-[2.1rem] sm:mt-[1.2rem] xsm:mt-[0.7rem] mt-1 border-2  border-[#0064B0] border-dashed border-l-0 border-b-0  ">
          <div className="flex flex-col gap-y-1 text-left -top-4 absolute">
            <h1 className="text-left bg-white w-fit pr-2 inline xl:text-[2.2rem] xxs:leading-7 font-[800]  lg:text-[35px] md:text-[35px] xsm:text-[20px]  xxs:text-[20px]">
              Our Software Development Steps
            </h1>
            <p className="font-[500] 2xl:w-[72%]  xl:w-[85%] lg:w-[85%] md:w-[92%] sm:w-[90%] xs:w-[87%]  xsm:w-[85%]  xxs:w-[95%] xxs:leading-[1.5rem] sm:leading-[1.8rem] xs:leading-[1.6rem] xsm:leading-[1.6rem] text-[#495459]  xl:text-[1.2rem]  sm:text-[1rem] text-[0.8rem]">
              Our software development process is a well-oiled machine designed
              to deliver results. We follow industry best practices and a mature
              development methodology to ensure your project's success. Our
              process includes:
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center items-center">
        <div className="w-full 2xl:h-[8.5rem] lg:h-[7rem] md:h-[6rem] sm:h-[5rem] xs:h-[5.2rem]  xxs:h-0 border-2  border-[#0064B0] border-dashed border-r-0 "></div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xxs:px-4 xxs:gap-y-5 xxs:gap-x-6  xs:gap-y-6 sm:gap-y-8 gap-x-4 xxs:w-[95%] xsm:w-[80%] mx-auto z-40 absolute -bottom-16">
          {divContent1.map((item, index) => (
            <div
              key={index}
              className="2xl:h-[9rem] lg:h-[8rem]  md:h-[7rem] sm:h-[6rem]  xsm:w-[90%] xxs:h-[5rem]  border-2 border-[#0068FF] rounded-[15px] flex flex-col items-center justify-center shadow-[4px_4px_2px_2px_#0064B0]   bg-white"
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
      </section>
    </main>
  );
};

export default DevSteps;
