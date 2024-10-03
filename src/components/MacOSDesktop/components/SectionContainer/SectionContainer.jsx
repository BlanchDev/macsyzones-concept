"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppSection from "./components/AppSection/AppSection";
import styles from "./SectionContainer.module.css";
import appSectionStyles from "./components/AppSection/AppSection.module.css";
import MacApp from "../AppContainer/components/MacApp/MacApp";
import ReactConfetti from "react-confetti";

gsap.registerPlugin(ScrollTrigger);

function SectionContainer() {
  const [app, setApp] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const appSections = containerRef.current.querySelectorAll(
      `.${appSectionStyles["app-section"]}`,
    );
    const sections = containerRef.current.querySelectorAll(
      `.${styles.sections}`,
    );

    appSections.forEach((section, index) => {
      gsap.to(section, {
        opacity: 1,
        scrollTrigger: {
          start: `${500 + index * 200}px`,
          end: `+=400px`,
          scrub: true,
          onEnter: () => {
            if (index === 2) {
              setApp("Netflix");
            }
          },
        },
      });
    });

    const macapp = containerRef.current.querySelectorAll(`.${styles.anapp}`);
    const sectionId3 = document.querySelector(`.${appSectionStyles.id3}`);

    const sectionId3Trigger = document.querySelector(
      `.${appSectionStyles.id3} .${appSectionStyles.trigger}`,
    );

    const sectionId3Position = {
      left: sectionId3Trigger.getBoundingClientRect().left,
      top: sectionId3Trigger.getBoundingClientRect().top,
    };

    gsap.to(macapp, {
      opacity: 0,
      scrollTrigger: {
        start: `0px`,
        end: `+=850px`,
        scrub: true,
      },
    });

    // Show VS CODE
    gsap.to(macapp, {
      opacity: 1,
      scrollTrigger: {
        start: `900px`,
        end: `+=300px`,
        scrub: true,
      },
    });

    // Move VS CODE to sectionId3 position
    gsap.to(macapp, {
      left: () => `${sectionId3Position.left - 200}px`,
      top: () => `${sectionId3Position.top - 200}px`,
      scrollTrigger: {
        start: "1200px",
        end: "+=400px",
        scrub: true,
      },
      onComplete: () => {
        gsap.fromTo(
          macapp,
          {
            width: "600px",
            height: "600px",
            left: () => `${sectionId3Position.left - 200}px`,
            top: () => `${sectionId3Position.top - 200}px`,
          },
          {
            width: () => `${sectionId3.offsetWidth}px`,
            height: () => `${sectionId3.offsetHeight}px`,
            left: () => `${sectionId3.offsetLeft}px`,
            top: () => `${sectionId3.offsetTop}px`,
            scrollTrigger: {
              start: "1600px",
              end: "+=300px",
              scrub: true,
              onLeaveBack: () => {
                gsap.to(sections, {
                  opacity: 1,
                  ease: "none",
                });
              },
            },

            onComplete: () => {
              gsap.to(sections, {
                opacity: 0,
                ease: "none",
              });
            },
          },
        );
      },
    });

    gsap.to(macapp, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        start: `1900px`,
        end: `+=150px`,
        scrub: true,
        onLeaveBack: () => {
          gsap.to(macapp, {
            opacity: 1,
            ease: "none",
          });
        },
      },
    });

    // Funnnyyy
    gsap.to(macapp, {
      scrollTrigger: {
        start: `1200px`,
        end: `+=1000px`,
        scrub: true,
        onEnter: () => {
          setShowConfetti(true);
          setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        },
        onLeaveBack: () => {
          setShowConfetti(false);
        },
        onLeave: () => {
          setShowConfetti(false);
        },
      },
    });

    // Trigger VS CODE for Section 3
    gsap.to(sectionId3, {
      scrollTrigger: {
        start: "1100px",
        scrub: true,
        toggleClass: {
          targets: sectionId3,
          className: appSectionStyles.active,
        },
      },
    });

    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles["section-container"]} column aic jcc`}
    >
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={true}
          numberOfPieces={300}
          gravity={0.04}
          style={{
            position: "absolute",
            top: "-36px",
            left: 0,
            zIndex: 2,
          }}
        />
      )}
      <div className={styles.anapp}>
        <MacApp appW='100%' appH='100%' appName={app} />
      </div>

      <div className={styles.sections}>
        <AppSection number={1} />
        <AppSection number={2} />
        <AppSection number={3} />
      </div>
    </div>
  );
}

export default SectionContainer;
