import React, { useState } from "react";
import apple from "../assets/apple.svg";
import android from "../assets/android-logo.svg";
import react from "../assets/react.svg";
import flutter2 from "../assets/flutter.svg";
import kotlin from "../assets/kotlin.svg";
import ionic from "../assets/ionic.svg";
import swift2 from "../assets/swift.svg";
import cPlus from "../assets/c-plus-plus.svg";
import csharp from "../assets/c-sharp.svg";
import xamarin from "../assets/xamarin.svg";
import aws from "../assets/aws.svg";
import azure from "../assets/azure.svg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/tech.css";

import reactJs from "../assets/technologyF/react.svg";
import js from "../assets/technologyF/js.svg";
import html from "../assets/technologyF/html.svg";
import css from "../assets/technologyF/css.svg";
import angular from "../assets/technologyF/angular.svg";
import vue from "../assets/technologyF/vue.svg";

import php from "../assets/techB/php.svg";
import django from "../assets/techB/django.svg";
import laravel from "../assets/techB/laravel.svg";
import node from "../assets/techB/node.svg";
import ruby from "../assets/techB/ruby.svg";

import postgreesql from "../assets/techData/postgresql.svg";
import mongo from "../assets/techData/mongodb.svg";

import graphql from "../assets/graphql.svg";
const Technology = () => {
  const appDev = [
    { path: apple, label: "Apple" },
    { path: android, label: "Android" },
    { path: react, label: "React" },
    { path: flutter2, label: "Flutter" },
    { path: kotlin, label: "Kotlin" },
    { path: ionic, label: "Ionic" },
    { path: swift2, label: "Swift" },
    { path: cPlus, label: "C++" },
    { path: csharp, label: "C#" },
    { path: xamarin, label: "Xamarin" },
  ];
  const frontend = [
    { path: reactJs, label: "reactJs" },
    { path: angular, label: "angular" },
    { path: vue, label: "vue" },
    { path: js, label: "js" },
    { path: css, label: "css" },
    { path: html, label: "html" },
  ];
  const backend = [
    { path: php, label: "node" },
    { path: django, label: "django" },
    { path: laravel, label: "laravel" },
    { path: node, label: "node" },
    { path: ruby, label: "ruby" },
  ];

  const infra = [
    { path: aws, label: "aws" },
    { path: azure, label: "azure" },
  ];
  const database = [
    { path: postgreesql, label: "postgreesql" },
    { path: mongo, label: "mongo" },
  ];
  const others = [
    { path: graphql, label: "graphql" },
    { path: graphql, label: "graphql" },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const applicationDevelopmentImages = appDev.filter((image) => image);
  const front = frontend.filter((icon) => icon);
  const back = backend.filter((icon) => icon);
  const inf = infra.filter((icon) => icon);
  const tabLabels = [
    "Application Development",
    "Infrastructure",
    "Front End",
    "Back End",
    "DataBase",
    "Other",
  ];
  return (
    <main className="w-full h-full 2xl:pl-60 xl:pl-40 lg:pl-20 md:pl-10  2xl:pr-60 xl:pr-40 lg:pr-20 md:pr-10 sm:px-10 px-5 my-10">
      <div className="flex flex-col gap-y-3">
      <h1 className="text-black lg:text-[30px]   md:text-[32px] sm:text-[25px] xs:text-[20px] xxs:text-[20px]  font-[800] mt-8     sm:leading-[35px]   xs:leading-[25px] xxs:leading-[28px]">
          Technology We Use
        </h1>
        <p className="text-gray-600  text-base md:leading-8 xsm:leading-7 font-[500]   md:text-[16px] xxs:leading-5 xxs:text-sm    ">
          Our experts leverage the latest tools and frameworks to deliver
          innovative and robust solutions for your business.
        </p>

        <Tabs className={'flex flex-col gap-y-6'}>


        <TabList className="tablist flex gap-11 justify-stretch mt-4 overflow-x-scroll overflow-y-hidden text-center text-[#495459] text-lg font-[600]">
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            className={`w-fit cursor-pointer tracking-normal outline-none flex-shrink-0 `}
            onClick={() => handleTabClick(index)}
          >
            <div className="flex flex-col gap-1">
              <span
                className={`${
                  selectedTab === index
                    ? "text-[#1255A1]"
                    : "text-[#495459] w-fit"
                } cursor-pointer`}
              >
                {label}
              </span>
              <div
                className={`${
                  selectedTab === index ? "w-full bg-[#1255A1] h-[6px] rounded-full " : ""
                }`}
              ></div>
            </div>
          </Tab>
        ))}
      </TabList>
      
          <TabPanel>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]   gap-0">
              {applicationDevelopmentImages.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} className="w-[]" />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]   gap-0">
              {inf.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]   gap-0">
              {front.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]   gap-0">
              {back.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]   gap-0">
              {database.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-2 xxs:grid-cols-1  mt-[10px]
               gap-0">
              {others.map((image, index) => (
                <div
                  key={index}
                  className="h-[200px] flex items-center justify-center border-[1px]"
                >
                  <img src={image.path} alt={image.label} />
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
};

export default Technology;

