import style from "./AppContent.module.css";
import Netflix from "./components/Netflix/Netflix";
import Terminal from "./components/Terminal/Terminal";
import VSCode from "./components/VSCode/VSCode";

function AppContent({ appName }) {
  if (appName === "Netflix") {
    return <Netflix />;
  }

  if (appName === "VS Code") {
    return <VSCode />;
  }

  if (appName === "Terminal") {
    return <Terminal />;
  }

  return <div className={`${style["app-content"]} column aic`}>test</div>;
}

export default AppContent;
