import styles from "./AppSection.module.css";

function AppSection({ number }) {
  return (
    <div
      className={`
      ${styles[`id${number}`]}
      ${styles["app-section"]}
      column aic jcc`}
    >
      <div className={`${styles.trigger} column aic jcc`}>
        <h2>{number}</h2>
      </div>
    </div>
  );
}

export default AppSection;
