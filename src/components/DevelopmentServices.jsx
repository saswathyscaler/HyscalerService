import React, { useState } from "react";
import tailored from "../assets/developServices/tailored.svg";
import flexible from "../assets/developServices/flexible.svg";
import high from "../assets/developServices/highPerformance.svg";
import scalable from "../assets/developServices/scalable.svg";
import outsource from "../assets/developServices/outsourcing.svg";
import ongoing from "../assets/developServices/ongoing.svg";

const DevelopmentServices = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };
  const divContent = [
    {
      icon: tailored,
      title: "Tailored Custom Software Solutions",
      descriptions:
        "Our custom software development service is all about crafting software solutions that perfectly align with your unique requirements and business processes.",
    },
    {
      icon: scalable,

      title: "Scalable and User-Centric Software Products",
      descriptions:
        "We specialize in the development of scalable and user-centric software products, including SaaS, mobile apps, and desktop applications. Our focus is on delivering exceptional user experiences.",
    },
    {
      icon: outsource,

      title: "Full-fledged Software Development Outsourcing",
      descriptions:
        "HyScaler has the expertise to assemble and manage self-sufficient development teams that can handle the entirety of your software development needs.",
    },
    {
      icon: ongoing,

      title: "Ongoing Software Support and Maintenance",
      descriptions:
        "We are dedicated to ensuring the continuous and smooth operation of your software through vigilant monitoring, proactive optimization, rapid issue resolution, and the delivery of new features.",
    },
    {
      icon: flexible,

      title: "Flexible Team Augmentation",
      descriptions:
        "HyScaler provides skilled resources for various roles throughout the software development life cycle. Whether you need developers, testers, team leads, DevOps engineers, or more, we've got you covered.",
    },
    {
      icon: high,

      title: "High-Performing Dedicated Teams",
      descriptions:
        "Accelerate your development initiatives with our high-performing dedicated teams of IT professionals. These tailored teams focus solely on your project, efficiently bridging any skill gaps and expediting your development goals.",
    },
  ];

  return (
    <main className=" w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 my-10">
      <div className="flex flex-col gap-y-3 ">
       
          <h1 className="text-black lg:text-[30px]   md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800] mt-8     sm:leading-[35px]   xs:leading-[25px] xxs:leading-[28px]">
            {" "}
            Our Software Development Services Offerings
          </h1>

          <p className="text-gray-600  text-base xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">
            At HyScaler, we offer a comprehensive suite of software development
            services tailored to meet your business needs. Our range of services
            includes:
          </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3   gap-5  ">
          {divContent.map((item, index) => (
            <div
              key={index}
              className="w-full  py-4 px-2    flex flex-col items-center gap-y-2 justify-start border-2  "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="sm:w-16 sm:h-16 w-14 h-14 "
              />
              <h1 className="text-[1rem]  text-center md:text-[1.2rem] xl:text-[1.3rem] font-semibold my-3">
              {item.title}
              </h1>
              <p className="text-center lg:text-[18px] sm:text-[15px] text-[14px] text-[#495459] font-[500] leading-6 sm:leading-7">
                {item.descriptions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DevelopmentServices;
