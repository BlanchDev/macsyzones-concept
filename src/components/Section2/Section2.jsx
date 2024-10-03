"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import page from "../../app/page.module.css";
import style from "./Section2.module.css";

function Section2({ children }) {
  const section2Ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const section2 = document.querySelector(`.${style.section2}`);

    gsap.to(section2, {
      top: 0,
      ease: "none",
      scrollTrigger: {
        start: "3500px",
        end: `+=1000px`,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id='section2'
      ref={section2Ref}
      className={`${page.section} ${style.section2}`}
    >
      {children}
    </section>
  );
}

export default Section2;
