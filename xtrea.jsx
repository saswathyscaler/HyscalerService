`import React from "react"
import planning from "../../images/svg/devsteps/planning.svg"
import deploy from "../../images/svg/devsteps/deploy.svg"
import design from "../../images/svg/devsteps/design.svg"
import support from "../../images/svg/devsteps/support.svg"
import development from "../../images/svg/devsteps/development.svg"
import testing from "../../images/svg/devsteps/testing.svg"

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
      title: "Testing",
      icon: testing,
    },
    {
      title: "Deployment",
      icon: deploy,
    },
    {
      title: "Support",
      icon: support,
    },
  ]

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
  ]

  return (
    <section className="my-10 mx-auto 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 lg:gap-6 sm:gap-5 xxs:gap-3 text-center">
      <div className="h-auto md:py-10 py-5">
        <div className="h-fit md:border-dashed border-none md:border-t-2 md:border-r-2 md:border-b-2 border-[#0064b0]">
          <div className="relative md:text-left text-center md:-top-[26px] top-auto md:left-0 md:right-auto md:block flex flex-col items-center">
            <h2 className="bg-white font-extrabold sm:text-[30px] xs:text-[23px] text-[22px] w-fit pr-2">
              Our Software Development Steps
            </h2>
            <h5 className="w-4/5 mt-2 md:mb-0 mb-7 font-medium md:text-base text-sm text-[#495459]">
              Our software development process is a well-oiled machine designed
              to deliver results. We follow industry best practices and a mature
              development methodology to ensure your project's success. Our
              process includes:
            </h5>
          </div>
        </div>
        <div className="relative border-dashed md:border-b-2 md:border-l-2 border-[#0064b0]">
          <div className="flex md:flex-row flex-col md:justify-around md:gap-0 gap-9 items-center md:items-baseline relative md:-bottom-16 right-1">
            {divContent.slice(0, 3).map((step, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-[#0064b0] flex flex-col justify-center items-center gap-3 h-auto md:w-3/12 w-[80%] px-3 py-7 bg-white rounded-lg devStep_offset select-none z-10"
                >
                  <span className="min-h-fit">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="h-10 w-10"
                    />
                  </span>
                  <h4 className="font-medium tracking-wide text-[#133e5f]">
                    {step.title}
                  </h4>
                </div>
              )
            })}
            <hr className="z-0 rotate-90 w-[55rem] border-dashed border-t-2 border-[#0064b0] md:hidden block" />
          </div>
        </div>

        <div className="relative md:border-dashed border-none md:border-b-2 md:border-r-2 border-[#0064b0]">
          <div className="md:pt-12 flex md:flex-row flex-col md:justify-around md:gap-0 gap-9 items-center md:items-baseline relative md:-bottom-16 right-1">
            <span className="bg-white justify h-24 w-[10rem] absolute left-0 bottom-0 z-0 md:block hidden"></span>
            {divContent.slice(3, 6).map((step, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-[#0064b0] flex flex-col justify-center items-center gap-3 h-auto md:w-3/12 w-[80%] px-3 py-7 bg-white rounded-lg devStep_offset select-none z-10"
                >
                  <span className="min-h-fit">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="h-10 w-10"
                    />
                  </span>
                  <h4 className="font-medium tracking-wide text-[#133e5f]">
                    {step.title}
                  </h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="h-auto w-full mt-24 mb-16">
        <div className=" h-auto flex flex-col  lg:gap-y-5 xxs:gap-y-4 text-left ">
          {contentData.map((item, index) => (
            <div key={index} className="">
              <h1 className="flex font-[700] lg:text-[1rem] xm:text-[18px]  leading-5 w-full">
                <span className="flex lg:w-[12px] lg:h-[12px] xsm:w-[10px] xsm:h-[10px] xxs:w-2 xxs:h-2 bg-[#0064B0] mt-1 xsm:mr-4  xxs:mr-2 w-[10%]"></span>
                <span className="w-[90%]">
                  {item.title}
                  <span className="font-[500] xxs:text-[14px] sm:text-[1rem] lg:leading-6 xxs:leading-[24px] ">
                    {item.description}
                  </span>
                </span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DevelopMentSteps
`