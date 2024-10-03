import style from "./AppBar.module.css";
import { useEffect, useRef } from "react";

function AppBar({ appName }) {
  const audioRef = useRef(null);
  const fakeButtonRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }
  };

  const handleUserInteraction = () => {
    if (appName === "Spotify") {
      playAudio();
    }
  };

  const simulateClick = (element) => {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    element.dispatchEvent(event);
  };

  useEffect(() => {
    document.addEventListener("click", handleUserInteraction);

    if (appName === "Spotify") {
      setTimeout(() => {
        if (fakeButtonRef.current) {
          simulateClick(fakeButtonRef.current); // Simüle edilmiş tıklama
        }
      }, 1000); // 1 saniye bekle

      handleUserInteraction();
    }

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [appName]);

  return (
    <div className={`${style["app-bar"]} row aic`}>
      <div className={`${style.dots} row aic gap7`}>
        <span className={`${style.dot} ${style.red}`} />
        <span className={`${style.dot} ${style.yellow}`} />
        <span className={`${style.dot} ${style.green}`} />
      </div>
      <div className={`${style["app-title"]} row aic jcc`}>
        <span>{appName}</span>
      </div>
      <audio ref={audioRef} src='/sounds/0929.MP3' style={{ display: "none" }}>
        <track kind='captions' />
      </audio>
      <button
        ref={fakeButtonRef}
        style={{ display: "none" }}
        onClick={playAudio}
      />
    </div>
  );
}

export default AppBar;
