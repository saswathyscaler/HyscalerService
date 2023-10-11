import React from "react";
import blog1 from "../assets/Blog/blog1.png";
import blog2 from "../assets/Blog/blog2.png";
import blog3 from "../assets/Blog/blog3.png";
import arrow from "../assets/Blog/arrow.svg";

const BlogPost = () => {
  const blogContent = [
    {
      img: blog1,
      heading: "Cryptocurrency",
      date: "August 22, 2023",
      description: "Simplifying the DeFi Ecosystem with a Web3 Dashboard",
    },
    {
      img: blog2,
      heading: "Cryptocurrency",
      date: "August 22, 2023",
      description: "Simplifying the DeFi Ecosystem with a Web3 Dashboard",
    },
    {
      img: blog3,
      heading: "Cryptocurrency",
      date: "August 22, 2023",
      description: "Simplifying the DeFi Ecosystem with a Web3 Dashboard",
    },
  ];

  return (
    <main className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 bg-[#fff] py-6">
      <div>
        <div className="flex flex-col  gap-y-6">
          <div className="text-center text-[#000] text-[40px] font-[800] leading-10">
            <h1>Latest Blog Posts</h1>
          </div>
          <div className="grid md:grid-cols-3 xxs:grid-cols-1">
            {blogContent.map((item, index) => (
              <div
                key={index}
                className="w-full  p-4    flex flex-col items-center justify-center relative"
              >
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-full rounded-lg"
                />

                <div
                  className=" w-[85%] relative 
              bottom-[1.2rem]  p-3 py-2 rounded-[5px] flex justify-between gap-x-3  bg-[#1953FF] text-[#fff] font-semibold text-[15px] leading-16 text-center "
                >
                  <span>{item.heading}</span> <span>{item.date}</span>
                </div>
                <div className="text-left p-4  gap-3 flex flex-col leading-7 font-[600] text-[22px]">
                  <p>{item.description}</p>
                  <span className="text-[#1255A1] font-[600] text-[18px] flex gap-x-2 items-center ">
                    <span>Read more</span>
                    <img src={arrow} alt="" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
