"use client";

import styles from "./SafariApp.module.css";
import {
  BsLayoutTextWindowReverse,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  IoArrowDownCircleOutline,
  IoLockClosed,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { IoIosRefresh } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { CiExport } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

function SafariApp() {
  return (
    <div className={`${styles.safariApp} column aic`}>
      <div className={`${styles.safariAppHeader} row aic jcsb`}>
        <div className={`${styles.dots} row aic gap7`}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.yellow}`} />
          <span className={`${styles.dot} ${styles.green}`} />
          <div className={`${styles.tools} row aic gap7`}>
            <BsLayoutTextWindowReverse size={15} />
            <div className={styles.vline} />
            <BsChevronDown size={9} />
          </div>
          <div className={`${styles.navigation} row aic gap7`}>
            <BsChevronLeft size={13} />
            <BsChevronRight size={13} />
          </div>
        </div>
        <div className={`${styles.center} row aic jcc`}>
          <div className={`${styles.searchBar} row aic jcc`}>
            <div className={`${styles.searchInput} row aic jcc`}>
              <input
                type='text'
                placeholder='Search or enter website name'
                value='macsyzones.com'
                readOnly
              />
              <IoLockClosed size={15} color='rgba(255, 255, 255, 0.8)' />
            </div>
            <HiMenuAlt3 size={15} color='rgba(255, 255, 255, 0.7)' />
          </div>
        </div>
        <div className={`${styles.safariAppRight} row aic jcc gap10`}>
          <IoArrowDownCircleOutline size={20} />
          <MdOutlineContentCopy size={18} />
          <TbGridDots size={16} />
          <IoIosRefresh size={17} />
          <AiOutlinePlus size={17} />
          <CiExport size={17} />
          <IoInformationCircleOutline size={20} />
        </div>
      </div>

      <div className={`${styles.safariAppContainer} column aic gap25`}>
        <div className={`${styles.safariAppContent} column aic gap7`}>
          <div className={`row aic gap7`}>
            <img src={"/images/logo4.png"} alt='Logo' width={50} height={50} />
            <h3>Macsy Zones</h3>
          </div>
          <p>
            Macsy Zones is a free and open-source MacOS workspace that enhances
            your experience.
          </p>
          <p>Shape, organize, and customize all windows as you like.</p>
          <p>Save all your workspaces thanks to remembering windows.</p>
          <p>
            Enhance your experience with optional features within the
            application.
          </p>
          <p>Working on Mac has never been this comfortable.</p>
          <br />
        </div>
        <div className={`${styles.safariAppContent} column aic gap7`}>
          <img
            src={"/images/popup.png"}
            alt='Popup'
            width={"auto"}
            height={"auto"}
          />
        </div>
      </div>
    </div>
  );
}

export default SafariApp;
