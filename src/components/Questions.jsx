import React, { useState } from "react";
import downarrow from "../assets/downarrow.svg";
import upArrow from "../assets/upArrow.svg";
import { BsArrowUp } from 'react-icons/bs';


const Questions = () => {
  

  const faqData = [
    {
      question: "What is software development?",
      answer: "Software development is the process of designing, coding, testing, and maintaining software applications or systems. It involves creating software solutions to meet specific business or user needs."
    },
    {
      question: "Why should I choose HyScaler for software development services?",
      answer: "HyScaler is a trusted provider of software development services known for its expertise, dedication, and commitment to delivering high-quality software solutions. We offer tailored services, cutting-edge technology, and a track record of successful projects to help you achieve your software development goals."
    },
    {
      question: "What industries do your software development services cater to?",
      answer: "HyScaler's software development services cater to a wide range of industries, including but not limited to healthcare, finance, e-commerce, manufacturing, and more. We have experience working across diverse sectors to address unique industry-specific challenges."
    },
    {
      question: "Can you explain your software development process?",
      answer: "Our software development process at HyScaler follows a structured approach that includes requirements gathering, design, development, testing, deployment, and ongoing support. We emphasize collaboration, communication, and quality assurance at every stage to ensure the successful delivery of your software project."
    },
    {
      question: "Do you provide mobile app development services as part of your software development offerings?",
      answer: "Yes, HyScaler offers comprehensive mobile app development services as part of our software development offerings. Whether you need iOS, Android, or cross-platform app development, our team has the expertise to create mobile applications that meet your requirements and deliver a great user experience."
    },
    {
      question: "Is HyScaler a global software development company?",
      answer: "Yes, HyScaler is a global software development company with a presence in multiple countries. We serve clients worldwide and have a diverse team of experts who bring a global perspective to software development projects."
    },
    {
      question: "How do I get started with HyScaler's software development services?",
      answer: "To get started with HyScaler's software development services, simply contact us through our website or get in touch with our sales team. We'll be happy to discuss your project requirements, provide a customized proposal, and guide you through the onboarding process to kickstart your software development project."
    },
    {
      question: "How do I get started with HyScaler's software development services?",
      answer: "To get started with HyScaler's software development services, you can reach out to us through our website or contact our sales team directly. We will promptly respond to your inquiry, discuss your specific needs, and provide you with a tailored plan to initiate your software development project."
    }
  ];
  
  const [showAnswers, setShowAnswers] = useState(Array(faqData.length).fill(false));

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  const renderAnswer = (index) => {
    if (showAnswers[index]) {
      return (
        <div className="w-full p-3 bg-[#F0F6FE] rounded-[10px]" key={index}>
          <p className="text-left w-[80%] font-normal leading-6 text-[15px] text-[#000]">
            {faqData[index].answer}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <main className="w-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10 2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 z-30 bg-[#fff] py-6">
      <div className="flex flex-col items-center justify-center text-center gap-y-14">

      <h1 className="text-black text-center lg:text-[30px] w-[90%]  md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800]  mt-8   sm:leading-[40px]   xs:leading-[25px] xxs:leading-[28px]  ">
            Frequently Asked Questions (FAQs)
          </h1>
      

        <div className="grid grid-cols-1  md:grid-cols-2 gap-3">
          {faqData.map((faq, index) => (
            <div className="w-full bg-[#F0F6FE] rounded-[10px]" key={index}>
              <div
                className="p-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <p className="text-left w-[80%] font-semibold leading-6 text-[15px] text-[#000]">
                  {faq.question}
                </p>
                <button
                  className="w-6 h-6 text-center flex justify-center items-center bg-blue-500 rounded-full focus:outline-none"
                >
                  {showAnswers[index] ? (
                    <img src={upArrow} alt="" />

                    ) : (
                    <img src={downarrow} alt="" />
                  )}
                </button>
              </div>
              {showAnswers[index] && renderAnswer(index)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Questions;
