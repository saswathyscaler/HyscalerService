import React, { useState } from "react";
import agile from "../assets/devApproach/agile.svg";
import scrum from "../assets/devApproach/scrum.svg";
import kanban from "../assets/devApproach/kanban.svg";

const ProjectDevelopApproach = () => {
  const content = [
    {
      icon: agile,
      heading: "Agile Over Waterfall",
      description:
        "While the Waterfall approach adheres to a rigid, predefined template, the Agile methodology champions flexibility and embraces change. At HyScaler, we wholeheartedly adopt the Agile philosophy, empowering both our employees and clients to make course corrections as needed, ensuring a dynamic and responsive approach to software development.",
    },
    {
      icon: scrum,
      heading: "Scrum Development",
      description:
        "In Scrum development, the software is crafted in 2–3-week iterations known as Sprints. These Sprints have clearly defined granular goals and backlogs. We ensure transparency in the development process through various essential activities, including sprint planning meetings, daily stand-ups, sprint reviews (including demos), retrospective analysis, and backlog refinement (grooming).",
    },
    {
      icon: kanban,
      heading: "Kanban Development",
      description:
        "Kanban development involves working in very short Sprints, often daily. Frequent meetings, typically daily or once every 2 days, are held to monitor progress and prioritize the next steps. We utilize a Kanban Board for a clear visual representation of all project activities, responsible team members, and ongoing progress.",
    },
  ];


   const [expanded, setExpanded] = useState([]);

   const toggleExpand = (index) => {
     const newExpanded = [...expanded];
     newExpanded[index] = !newExpanded[index];
     setExpanded(newExpanded);
   };

  return (
    <main className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 bg-[#fff] my-10">
      <div className="flex flex-col gap-y-9">
      <h1 className="text-black lg:text-[30px] w-[90%]  md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800]  mt-8   sm:leading-[40px]   xs:leading-[25px] xxs:leading-[28px]  ">
            Choosing the Right Project Development Approach for
          </h1>

        <div className="flex flex-col gap-y-6">
          {content.map((item, index) => (
            <div
              key={index}
              className="border border-[#E9EBF1] p-6 rounded-[10px]"
            >
              <div className="flex  gap-3">
                <div>
                  <span className="bg-[#1953FF] sm:w-14 sm:p-3 xxs:p-1  sm:h-14 xxs:w-12 xxs:h-12 flex justify-center items-center rounded-full">
                    <img
                      src={item.icon}
                      alt="Agile Icon"
                      className="sm:w-10 sm:h-10 xxs:w-7 xxs:h-7"
                    />
                  </span>
                </div>
                <div className="flex flex-col sm:gap-y-4 xxs:gap-y-2">
                  <h2 className="font-[700]  leading-7  md:text-[25px] xsm:text-[20px] xxs:text-[18px]   text-[#000]">
                    {item.heading}
                  </h2>
                  <p className="text-[#495459] font-[500] md:text-[16px] text-[14px] sm:leading-6 leading-5">
                    {expanded[index]
                      ? item.description
                      : item.description.split(" ").slice(0, 17).join(" ")}
                    {item.description.split(" ").length > 15 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-blue-500 cursor-pointer"
                      >
                        {expanded[index] ? "  Read Less" : "  Read More"}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectDevelopApproach;
