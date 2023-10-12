import * as React from "react"
import Home from "./components/Home";
import GridView from "./components/GridView";
import DevelopMentSteps from "./components/DevelopMentSteps";
import BelowHome from "./components/BelowHome";
import Trusted from "./components/Trusted";
import Technology from "./components/Technology";
import ReadyToChange from "./components/ReadyToChange";
import DevelopmentServices from "./components/DevelopmentServices";
import Questions from "./components/Questions";
import ProjectDevelopApproach from "./components/ProjectDevelopApproach";



function App() {
  return (
    <section className=" w-full">
      <Home />
      <BelowHome />
     <GridView />
      <DevelopMentSteps />
      <Trusted />
      <Technology />
     <DevelopmentServices />
      <ReadyToChange />
      <ProjectDevelopApproach />
      <Questions />
      

    </section>
  );
}

export default App;
