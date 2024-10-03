"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./AppContainer.module.css";
import section1Style from "../../../Section1/Section1.module.css";
import MacApp from "./components/MacApp/MacApp";

function AppContainer({ setActiveApps }) {
  const [scope] = useAnimate();
  const [appCount, setAppCount] = useState(0);
  const [gridLayout, setGridLayout] = useState({ columns: 0, rows: 0 });
  const [firstColumnFullHeight, setFirstColumnFullHeight] = useState(true);
  const [firstRowFullWidth, setFirstRowFullWidth] = useState(false);
  const [currentApps, setCurrentApps] = useState([]);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const animateGrid = useCallback(
    async (columns, rows, count, fullHeight1, fullWidth1, apps) => {
      setGridLayout({ columns, rows });
      setAppCount(count);
      setFirstColumnFullHeight(fullHeight1);
      setFirstRowFullWidth(fullWidth1);
      setCurrentApps(apps);
    },
    [],
  );

  /*useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gridStates.forEach((state, index) => {
      gsap.to(".app-container", {
        scrollTrigger: {
          start: `${2300 + index * 100}px`,
          end: "+=100px",
          scrub: true,
          onLeaveBack: () => {
            setGridLayout({ columns: state.columns, rows: state.rows });
            setAppCount(state.count);
            setFirstColumnFullHeight(state.firstColumnFullHeight);
            setFirstRowFullWidth(state.firstRowFullWidth);
            setCurrentApps(state.apps);
          },
        },
        onComplete: () => {
          setGridLayout({ columns: state.columns, rows: state.rows });
          setAppCount(state.count);
          setFirstColumnFullHeight(state.firstColumnFullHeight);
          setFirstRowFullWidth(state.firstRowFullWidth);
          setCurrentApps(state.apps);
        },
      });
    });

    gsap.to(".app-container", {
      scrollTrigger: {
        start: "2250px",
        end: "+=50px",
        scrub: true,
        onLeaveBack: () => {
          setGridLayout({ columns: 0, rows: 0 });
          setAppCount(0);
          setFirstColumnFullHeight(false);
          setFirstRowFullWidth(false);
          setCurrentApps([]);
        },
      },
      onComplete: () => {
        setGridLayout({ columns: 0, rows: 0 });
        setAppCount(0);
        setFirstColumnFullHeight(false);
        setFirstRowFullWidth(false);
        setCurrentApps([]);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);*/

  useEffect(() => {
    let isAnimating = true;

    const gridStates = [
      {
        columns: 1,
        rows: 1,
        count: 1,
        firstColumnFullHeight: false,
        firstRowFullWidth: false,
        duration: 500,
        apps: ["VS Code"],
      },
      {
        columns: 2,
        rows: 1,
        count: 2,
        firstColumnFullHeight: false,
        firstRowFullWidth: false,
        duration: 750,
        apps: ["VS Code", "Netflix"],
      },
      {
        columns: 3,
        rows: 1,
        count: 3,
        firstColumnFullHeight: false,
        firstRowFullWidth: false,
        duration: 750,
        apps: ["VS Code", "Netflix", "Terminal"],
      },
      {
        columns: 2,
        rows: 2,
        count: 3,
        firstColumnFullHeight: true,
        firstRowFullWidth: false,
        duration: 1000,
        apps: ["VS Code", "Netflix", "Terminal"],
      },
      {
        columns: 2,
        rows: 2,
        count: 3,
        firstColumnFullHeight: false,
        firstRowFullWidth: true,
        duration: 750,
        apps: ["VS Code", "Netflix", "Terminal"],
      },
      {
        columns: 2,
        rows: 2,
        count: 4,
        firstColumnFullHeight: false,
        firstRowFullWidth: false,
        duration: 1000,
        apps: ["VS Code", "Netflix", "Terminal", "Terminal"],
      },
    ];

    const animation = async () => {
      for (const {
        columns,
        rows,
        count,
        firstColumnFullHeight,
        firstRowFullWidth,
        duration,
        apps,
      } of gridStates) {
        if (!isAnimating) break;
        await animateGrid(
          columns,
          rows,
          count,
          firstColumnFullHeight,
          firstRowFullWidth,
          apps,
        );
        setActiveApps(apps);
        await new Promise((resolve) => setTimeout(resolve, duration));
      }

      if (isAnimating) {
        setIsAnimationComplete(true);
      }
    };

    if (!isAnimationComplete) {
      animation();
    }

    return () => {
      isAnimating = false;
    };
  }, [animateGrid, isAnimationComplete]);

  const getGridRow = (index, firstColumnFullHeight) => {
    if (firstColumnFullHeight && index === 0) return "1 / span 2";
    return `auto`;
  };

  const getGridColumn = (index, firstRowFullWidth) => {
    if (firstRowFullWidth && index === 0) return "1 / span 2";
    return `auto`;
  };

  useEffect(() => {
    const section1 = document.querySelector(`.${section1Style.section1}`);
    const content2 = document.querySelector(`.${section1Style.content2}`);

    gsap.to(section1, {
      opacity: 1,
      scrollTrigger: {
        start: "2200px",
        end: "+=400px",
        scrub: true,
        onEnter: () => {
          gsap.to(content2, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              start: "2200px",
              end: "+=50px",
              scrub: true,
            },
          });
        },
        onLeaveBack: () => {
          gsap.to(section1, {
            opacity: 0,
          });
          setIsAnimationComplete(true);
          setCurrentApps([]);
          setGridLayout({ columns: 0, rows: 0 });
          setFirstColumnFullHeight(false);
          setFirstRowFullWidth(false);
        },
      },
      onComplete: () => {
        setIsAnimationComplete(false);
        setCurrentApps([]);
        setGridLayout({ columns: 0, rows: 0 });
        setFirstColumnFullHeight(false);
        setFirstRowFullWidth(false);
      },
    });

    gsap.to(section1, {
      scrollTrigger: {
        start: "3500px",
        end: "+=400px",
        scrub: true,
        onLeaveBack: () => {
          gsap.to(section1, {
            opacity: 0,
          });
          setIsAnimationComplete(false);
        },
      },
      onComplete: () => {
        setIsAnimationComplete(true);
      },
    });

    const handleClick = () => {
      setIsAnimationComplete(false);
    };

    document.getElementById("try").addEventListener("click", handleClick);

    return () => {
      document.getElementById("try").removeEventListener("click", handleClick);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={scope}
      className={`${style["app-container"]}`}
      style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: `repeat(${gridLayout.columns}, minmax(200px, 1fr))`,
        gridTemplateRows: `repeat(${gridLayout.rows}, minmax(200px, 1fr))`,
        width: "100%",
        height: "calc(100% - (36px + 70px + calc(1px + 9px)))",
      }}
    >
      <AnimatePresence>
        {currentApps.map((appName, index) => {
          if (appName.length <= 1) {
            return <div key={`MacApp-${index * 1}`} />;
          }

          return (
            <motion.div
              key={`MacApp-${index * 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gridRow: getGridRow(index, firstColumnFullHeight),
                gridColumn: getGridColumn(index, firstRowFullWidth),
              }}
            >
              <motion.div
                style={{
                  width: "99%",
                  height: "99%",
                }}
                layout
                initial={{ width: 0, height: 0 }}
                animate={{ width: "100%", height: "100%" }}
                exit={{ width: 0, height: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  duration: 0.5,
                }}
              >
                <MacApp appW='100%' appH='100%' appName={appName} />
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {isAnimationComplete ? (
        <style jsx global>{`
          #section1 {
            opacity: 1;
            transition: all 1s ease;
          }
        `}</style>
      ) : (
        <style jsx global>{`
          #section1 {
            opacity: 0;
            transition: all 1s ease;
            pointer-events: none;
          }
        `}</style>
      )}
    </motion.div>
  );
}

export default AppContainer;
