"use client";

import Image from "next/image";
import page from "../../app/page.module.css";
import style from "./Section1.module.css";
import xlogo from "../../../public/images/x-logo.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

function Section1() {
  gsap.registerPlugin(ScrollTrigger);

  const section1Ref = useRef(null);
  const content1Ref = useRef(null);
  const [visibleComments, setVisibleComments] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const section1 = section1Ref.current;
    const content1 = content1Ref.current;

    const animateSection1Opacity = () => {
      gsap.to(section1, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          start: "200px",
          end: "+=200px",
          scrub: true,
          onEnter: animateContent1Opacity,
        },
      });
    };

    const animateContent1Opacity = () => {
      gsap.to(content1, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          start: "200px",
          end: "+=200px",
          scrub: true,
        },
      });
    };

    const animateSection1OpacityAndComments = () => {
      gsap.to(section1, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          start: "3000px",
          end: "+=400px",
          scrub: true,
        },
      });

      gsap.to(section1, {
        ease: "none",
        scrollTrigger: {
          start: "2200px",
          end: "+=50px",
          scrub: true,
          onEnter: startCommentAnimation,
        },
      });
    };

    const updateVisibleComments = () => {
      setVisibleComments((prev) => (prev < 5 ? prev + 1 : prev));
    };

    const startCommentAnimation = () => {
      const timer = setInterval(updateVisibleComments, 750);
      return () => clearInterval(timer);
    };

    animateSection1Opacity();
    animateSection1OpacityAndComments();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const comments = [
    {
      author: "@TimCuk",
      text: "MacsyZones.... the point there's nothing to say...",
    },
    {
      author: "@ElanMask",
      text: "This app changed my life.. The productivity boost is unreal.",
    },
    {
      author: "@SigmandFreed",
      text: "I.. I can't say anything this app.... It is mind blowing!!!!11!11",
    },
    {
      author: "@SatoshiNakamoto",
      text: "I'll reveal myself just for seeing the creators of MacsyZones!",
    },
    {
      author: "@God",
      text: "The thing I've created the humankind for! Finally, human did it!",
    },
  ];

  return (
    <section
      id='section1'
      ref={section1Ref}
      className={`${page.section} ${style.section1} column aic jcc`}
      style={{
        backdropFilter:
          isClient && !navigator.userAgent.includes("Firefox")
            ? "blur(1.5px)"
            : "none",
      }}
    >
      <div className={`${style.content} row aic jcc gap50`} ref={content1Ref}>
        <img
          src={"/images/dark-logo.png"}
          alt='Logo'
          width={350}
          height={350}
        />
        <div className={`${style.text} column aic jcc gap50`}>
          <h1 className='row aic jcc'>
            Macsy<span>Zones</span>
          </h1>
          <p className='column aic gap7 w100'>
            <b>Workspace,</b>
            <b className='row aic gap7'>
              <span className={style.gold}>redefined</span> &{" "}
              <span className={style.white}>revolutionized.</span>
            </b>
          </p>
          <div className='column aic jcc w100 gap40'>
            <button id='try' className={`${style.try} row aic jcc`}>
              Watch Demo
            </button>
            <button
              className='row aic jcc'
              onClick={() => window.open("", "_blank")}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className={`${style.content2} column-reverse gap15`}>
        <AnimatePresence>
          {comments.slice(0, visibleComments).map((comment, index) => (
            <motion.div
              key={`${comment.author}-${index}`}
              className={`${style.notification} row gap20`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${style.notificationHeader} row aic jcsb`}>
                <div className='row aic gap7'>
                  <Image src={xlogo} alt='X Logo' width={45} height={45} />
                </div>
              </div>
              <div className={`${style.notificationBody} column aic jcc gap5`}>
                <p>
                  <span>{comment.author}</span> {comment.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className='row aife w100'>
        <div className={`${style.blob}`} />
      </div>
    </section>
  );
}

export default Section1;
