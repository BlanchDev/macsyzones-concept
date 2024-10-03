"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./Dock.module.css";

function Dock({ activeApps, setActiveApps }) {
  gsap.registerPlugin(ScrollTrigger);

  const dockRef = useRef(null);

  useEffect(() => {
    const dockItems = dockRef.current.querySelectorAll(
      `.${style["dock-item"]}`,
    );

    const removeActiveClassFromOtherItems = (currentItem) => {
      dockItems.forEach((i) => {
        if (i !== currentItem) {
          i.classList.remove(style.active);
        }
      });
    };

    dockItems.forEach((item, index) => {
      gsap.to(item, {
        scrollTrigger: {
          start: `${100 + index * 100}px`,
          end: `+=101px`,
          toggleClass: {
            targets: item,
            className: style.active,
          },
          scrub: true,
          onEnter: () => {
            removeActiveClassFromOtherItems(item);
          },
          onLeave: () => {
            removeActiveClassFromOtherItems(item);
          },
        },
      });
    });

    gsap.to(dockRef, {
      scrollTrigger: {
        start: `900px`,
        onEnter: () => {
          setActiveApps(["Netflix"]);
        },
        onLeaveBack: () => {
          setActiveApps([]);
        },
      },
    });

    gsap.to(dockRef, {
      scrollTrigger: {
        start: `2250px`,
        onEnter: () => {
          setActiveApps([""]);
        },
        onLeaveBack: () => {
          setActiveApps(["Netflix"]);
        },
      },
    });

    gsap.to(dockRef, {
      scrollTrigger: {
        start: `900px`,
        end: `+=400px`,
        onEnter: () => {
          dockItems[5].classList.add(style.active);
        },
        onLeaveBack: () => {
          dockItems.forEach((item) => {
            item.classList.remove(style.active);
          });
        },
        onLeave: () => {
          dockItems.forEach((item) => {
            item.classList.remove(style.active);
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`${style["dock-container"]} row aifs jcc`}>
      <div ref={dockRef} className={`${style["dock"]} row aic`}>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Finder</span>
          <img src='/images/finder_icon.png' alt='Finder icon' />
          {activeApps.includes("Finder") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>VS Code</span>
          <img src='/images/vscode_icon.png' alt='Visual Studio Code icon' />
          {activeApps.includes("VS Code") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Terminal</span>
          <img src='/images/terminal_icon.png' alt='Terminal icon' />
          {activeApps.includes("Terminal") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Whatsapp</span>
          <img src='/images/whatsapp_icon.png' alt='Whatsapp icon' />
          {activeApps.includes("Whatsapp") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Discord</span>
          <img src='/images/discord_icon.png' alt='Discord icon' />
          {activeApps.includes("Discord") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Netflix</span>
          <img src='/images/netflix_icon.png' alt='Netflix icon' />
          {activeApps.includes("Netflix") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>Apple Music</span>
          <img src='/images/apple_music_icon.png' alt='Apple Music icon' />
          {activeApps.includes("Apple Music") && <div className={style.dot} />}
        </button>
        <button className={`${style["dock-item"]} column aic jcc`}>
          <span className={style["icon-name"]}>GitHub</span>
          <img src='/images/github_icon.png' alt='GitHub icon' />
          {activeApps.includes("GitHub") && <div className={style.dot} />}
        </button>
      </div>
    </div>
  );
}

export default Dock;
