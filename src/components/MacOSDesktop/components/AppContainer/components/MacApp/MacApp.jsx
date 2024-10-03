import style from "./MacApp.module.css";
import AppBar from "./components/AppBar/AppBar";
import AppContent from "./components/AppContent/AppContent";

function MacApp({ appW, appH, appName }) {
  if (!appName) return null;

  return (
    <div
      className={`${style["mac-app"]} column`}
      style={{ width: appW, height: appH, maxHeight: appH, overflow: "hidden" }}
    >
      <AppBar appName={appName} />
      <AppContent appName={appName} />
    </div>
  );
}

export default MacApp;
