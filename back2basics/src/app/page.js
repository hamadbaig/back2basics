"use client";
import React, { Fragment } from "react";
import Hero from "./component/private/Hero";
import Awards from "./component/private/Awards";
import AscendComponent from "./component/private/Ascend";
import JoinTeamComponent from "./component/private/Join";
import TeamComponent from "./component/private/Team";
import MainHero from "./component/private/mainHero";
import Progress from "./component/private/Progress";
import Partners from "./component/private/Partners";
import Company from "./component/private/company";
const App = () => {
  return (
    <Fragment>
      <section id="home" className="app">
        <MainHero />
        <Hero />
        <Progress />
        <AscendComponent />
        <Partners />
        <Company />
        <JoinTeamComponent />
      </section>
    </Fragment>
  );
};

export default App;
