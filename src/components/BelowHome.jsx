import React from "react";

const BelowHome = () => {
  return (
    <main className="bg-white my-10 mb-7 w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 ">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-black lg:text-[30px] w-[90%]  md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800]  mt-8   sm:leading-[40px]   xs:leading-[25px] xxs:leading-[28px]  ">
          Empower Your Business With Expert Software Development Services
        </h1>

        <p className="text-gray-600  text-base md:leading-8 xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">
          At HyScaler, we bring your software development projects to life. Our
          team of seasoned professionals combines decades of experience in the
          IT industry with a relentless drive for innovation. We specialize in
          crafting secure, high-performance, scalable, and user-friendly
          software solutions to help your business thrive.
        </p>

        <div className="flex flex-col gap-y-8">
          <h3 className="text-black   md:text-[24px] xsm:text-[20px] xxs:text-[16px] font-[600] md:leading-[35px] xxs:leading-7 ">
            Get started today with a custom quote or request software
            development services.
          </h3>

          <button  className="lg:w-[180px]  sm:w-[160px] xxs:w-[140px] text-[#0064B0]  md:h-[49px] xsm:h-[49px] xxs:h-[50px] rounded-[6px] border-[2px] flex justify-center items-center  border-[#1255A1]  hover:bg-[#1255A1]
           hover:text-white transition-all duration-[600ms] ease-in-out cursor-pointer tracking-normal font-[700]  leading-[24.38px] sm:text-[14px] xxs:text-[12px] ">
              Consult Our Experts
            </button>

        </div>
      </div>
    </main>
  );
};

export default BelowHome;
