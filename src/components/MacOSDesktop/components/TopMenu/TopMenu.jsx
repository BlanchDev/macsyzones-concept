"use client";

import Image from "next/image";
import style from "./TopMenu.module.css";
import { useState, useEffect } from "react";

function TopMenu() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date
      .toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
      .replace(",", "");
  };

  const formatTime = (date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className={`${style["top-menu"]} row aic jcsb hid600`}>
      <div className={`${style["left-side"]} row aic jcfs`}>
        <div className={`${style["apple-logo"]}`}>
          <Image
            src='/images/apple-logo.png'
            alt='apple logo'
            width={13.47}
            height={16}
          />
        </div>
        <div className={`${style.section} ${style.finder} row aic`}>Finder</div>
        <div className={`${style.section} row aic`}>File</div>
        <div className={`${style.section} row aic`}>Edit</div>
        <div className={`${style.section} row aic`}>View</div>
        <div className={`${style.section} row aic`}>Go</div>
        <div className={`${style.section} row aic`}>Window</div>
        <div className={`${style.section} row aic`}>Help</div>
      </div>
      <div className={`${style["right-side"]} row aic jcfe`}>
        <div className={`${style["control-center-icon"]} row aic`}>
          <Image
            src='/images/control-center-icon.png'
            alt='control center'
            width={16.13}
            height={16}
            style={{
              filter: "invert(1)",
            }}
          />
        </div>

        <div className={`${style.section} row aic`}>
          <div className={style.date}>{formatDate(currentDateTime)}</div>
          <div>{formatTime(currentDateTime)}</div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
