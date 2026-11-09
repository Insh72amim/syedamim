import React, {useEffect, useState, useContext} from "react";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import TechStack from "./TechStack/TechStack";
import WorkExperience from "./workExperience/WorkExperience";
import StandardProject from "./StandardProjects/StandardProject";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import StyleContext from "../contexts/StyleContext";
import CodingProfile from "./codingProfile/codingProfile";
import "./Main.scss";
import Courses from "./courses/Courses";
import MiniProject from "./MiniProjects/MiniProject";

const Main = () => {
  const {isDark} = useContext(StyleContext);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div className={isDark ? "dark-mode app-root" : "light-mode app-root"}>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Greeting />
          <Skills />
          <WorkExperience />
          <Education />
          <TechStack />
          <StandardProject />
          <MiniProject />
          <CodingProfile />
          <Achievement />
          <Courses />
          <Profile />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
