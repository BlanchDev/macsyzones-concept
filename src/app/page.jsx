"use client";

import Section1 from "@/components/Section1/Section1";
import style from "./page.module.css";
import MacOSDesktop from "@/components/MacOSDesktop/MacOSDesktop";
import Section2 from "@/components/Section2/Section2";
import SafariApp from "@/components/Section2/components/SafariApp/SafariApp";
import MacApp from "@/components/MacOSDesktop/components/AppContainer/components/MacApp/MacApp";

export default function Home() {
  return (
    <div className={`${style.page} column aic`}>
      <Section1 />
      <MacOSDesktop />
      <Section2>
        <SafariApp />
        <MacApp appW='100%' appH='100%' appName='Netflix' />
      </Section2>
    </div>
  );
}
