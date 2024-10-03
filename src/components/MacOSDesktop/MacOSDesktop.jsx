"use client";

import style from "./MacOSDesktop.module.css";
import AppContainer from "./components/AppContainer/AppContainer";
import Dock from "./components/Dock/Dock";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import TopMenu from "./components/TopMenu/TopMenu";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MacOSDesktop() {
  const [activeApps, setActiveApps] = useState([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const macosDesktop = document.querySelector(`.${style["macos-desktop"]}`);

    gsap.to(macosDesktop, {
      top: `-100vh`,
      ease: "none",
      scrollTrigger: {
        start: `3500px`,
        end: `+=1000px`,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`${style["macos-desktop"]} column aic jcsb`}>
      <TopMenu />
      <section className={`${style["macos-desktop-section"]} column aic jcc`}>
        <SectionContainer />
        <AppContainer setActiveApps={setActiveApps} />
      </section>
      <Dock activeApps={activeApps} setActiveApps={setActiveApps} />
    </div>
  );
}

export default MacOSDesktop;
