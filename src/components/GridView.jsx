import React, { useState } from "react";
import icon from "../assets/services/s2.svg";
import icon1 from "../assets/services/s1.svg";

import arrow from "../assets/services/arrow.svg";
import arrow2 from "../assets/services/arrow1.svg";

import bank1 from "../assets/services/bank1.svg";
import bank2 from "../assets/services/bank2.svg";
import lending from "../assets/services/lending1.svg";
import lending2 from "../assets/services/lending2.svg";
import investment from "../assets/services/investment.svg";
import investment2 from "../assets/services/investment2.svg";
import entertainment from "../assets/services/entertain1.svg";
import entertainment2 from "../assets/services/entertain2.svg";
import insurance from "../assets/services/insurance1.svg";
import insurance2 from "../assets/services/insurance2.svg";
import manufacture from "../assets/services/manufacture1.svg";
import manufacture2 from "../assets/services/manufacture2.svg";
import oilGas1 from "../assets/services/oilGas1.svg";
import oilGas2 from "../assets/services/oilGas2.svg";
import realestate from "../assets/services/realestate.svg";
import realestate2 from "../assets/services/realestate2.svg";
import retail1 from "../assets/services/retail1.svg";
import retail2 from "../assets/services/retail2.svg";
import services1 from "../assets/services/services1.svg";
import services2 from "../assets/services/services2.svg";
import telecoms from "../assets/services/telecoms.svg";
import telecoms2 from "../assets/services/telecoms2.svg";

const items = [
  {
    id: 1,
    icon: icon,
    icon2: icon1,
    title: "HealthCare",
  },
  {
    id: 2,
    icon: bank1,
    icon2: bank2,
    title: "Banking",
  },
  {
    id: 3,
    icon: investment,
    icon2: investment2,
    title: "Investment",
  },
  {
    id: 4,
    icon: lending,
    icon2: lending2,
    title: "Lending",
  },
  {
    id: 5,
    icon: insurance,
    icon2: insurance2,
    title: "Insurance",
  },
  {
    id: 6,
    icon: retail1,
    icon2: retail2,
    arrow: arrow,
    arrow2: arrow2,
    title: "Retail",
  },
  {
    id: 7,
    icon: manufacture,
    icon2: manufacture2,
    title: "Manufacturing",
  },
  {
    id: 8,
    icon: entertainment,
    icon2: entertainment2,
    title: "Entertainment",
  },
  {
    id: 9,
    icon: oilGas1,
    icon2: oilGas2,
    title: "Oil and Gas",
  },
  {
    id: 10,
    icon: telecoms,
    icon2: telecoms2,

    title: "Telecoms",
  },
  {
    id: 11,
    icon: realestate,
    icon2: realestate2,
    title: "Real Estate",
  },
  {
    id: 12,
    icon: icon,
    icon2: icon1,
    title: "Healthcare",
  },
];

const GridView = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <main className="bg-[#0064B0]  text-white flex flex-col gap-3  h-auto pb-[45px]  w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5  my-10 ">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-white text-center lg:text-[30px]   md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800] mt-8     sm:leading-[35px]   xs:leading-[25px] xxs:leading-[28px]">
          Our Competences Span Across 30+ Industries
        </h1>
        <p className="text-white text-center text-base md:leading-8 xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">


       
          At HyScaler, we understand that every industry has its unique
          challenges and requirements. That's why we excel in a wide range of
          domains, ensuring that our software solutions are tailored to meet
          your specific needs.
        </p>

        <div className="grid grid-cols-2 xsm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[100%] md:w-[100%] lg:w-[100%] md:h-[180px] rounded-[10px] border-[1px] border-[#6FADDD] 
              hover:bg-[#fff] hover:text-[#0064B0] transition-colors duration-[700ms] ease-in-out flex justify-center"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-center items-center flex-col md:gap-3 p-2">
                {hoveredItem === item.id ? (
                  <>
                    <img
                      src={item.icon2}
                      alt=""
                      className="md:w-[70px] md:h-[70px] xsm:w-12 xsm:h-12 xxs:w-10 xxs-h-10 "
                    />
                    <h2 className="md:text-base xsm:text-[12px] xxs:text-[10px]  font-semibold leading-6 text-center">
                      {item.title}
                    </h2>
                    <img
                      src={arrow2}
                      alt=""
                      className=" md:w-6 md:h-6 xxs:w-4 xxs:h-4"
                    />
                  </>
                ) : (
                  <>
                    <img src={item.icon} alt=""    
                                       className="md:w-[70px] md:h-[70px] xsm:w-12 xsm:h-12 xxs:w-10 xxs-h-10 "
                    />
                    <h2 className="md:text-base xsm:text-[12px] xxs:text-[10px]  font-semibold leading-6 text-center">
                      {item.title}
                    </h2>
                    <img
                      src={arrow}
                      alt=""
                      className="  md:w-6 md:h-6 xxs:w-4 xxs:h-4"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GridView;
