import React from "react";
import styles from "./Terminal.module.css";

function Terminal() {
  const neofetchOutput = [
    { line: "~ ", color: "#58d363" },
    { line: "➜ neofetch", color: "#58d363" },
    { line: "                    'c.          Terminal ", color: "#58d363" },
    {
      line: "                 ,xNMM.          ------------- ",
      color: "#58d363",
    },
    {
      line: "               .OMMMMo           OS: MacsyZones ",
      color: "#58d363",
    },
    {
      line: "               OMMM0,            Host: Mac14,6 ",
      color: "#58d363",
    },
    {
      line: "     .;loddo:' loolloddol;.      Kernel: 24.1.0 ",
      color: "#58d363",
    },
    {
      line: "   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 3 days, 27 mins ",
      color: "#58d363",
    },
    {
      line: " .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 3 (port), 232 (brew) ",
      color: "#f8bc67",
    },
    {
      line: " XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: zsh 5.9 ",
      color: "#f8bc67",
    },
    {
      line: ";MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 2560x1440, 2056x1329 ",
      color: "#fb5f5a",
    },
    { line: ":MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua ", color: "#fb5f5a" },
    {
      line: ".MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Quartz Compositor ",
      color: "#f07cb1",
    },
    {
      line: " kMMMMMMMMMMMMMMMMMMMMMMMMWd.    WM Theme: MacsyZones Special (Light) ",
      color: "#f07cb1",
    },
    {
      line: " .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   Terminal: HyperTerm ",
      color: "#50a4f9",
    },
    {
      line: "  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   Terminal Font: Menlo ",
      color: "#50a4f9",
    },
    {
      line: "    kMMMMMMMMMMMMMMMMMMMMMMd     CPU: Apple M2 Max ",
      color: "#50a4f9",
    },
    {
      line: "     ;KMMMMMMMWXXWMMMMMMMk.      GPU: Apple M2 Max ",
      color: "#50a4f9",
    },
    {
      line: "       .cooc,.    .,coo:.        Memory: 4444MiB / 32768MiB ",
      color: "#50a4f9",
    },
    { line: "", color: "#50a4f9" },
    { line: "", color: "#50a4f9" },
    { line: "", color: "#50a4f9" },
    { line: "", color: "#50a4f9" },
    { line: "~ ", color: "#50a4f9" },
    { line: "➜ ", color: "#50a4f9" },
  ];

  return (
    <div className={styles.terminal}>
      <pre>
        {neofetchOutput.map((item, index) => (
          <span key={index * 1} style={{ color: item.color }}>
            {item.line}
            {index < neofetchOutput.length - 1 && <br />}
          </span>
        ))}
      </pre>
    </div>
  );
}

export default Terminal;
