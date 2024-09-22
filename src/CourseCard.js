import React from "react";
import styles from "./CourseCard.module.scss";

function CourseCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.divNew}>New</div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainTitle}>
          ES-111: Fundamentals of Electronic Systems
        </div>
        <div className={styles.mainPrice}>
          <p className={styles.pPrice}>$450</p>
          <p className={styles.pLanguage}>EN | 8h 00m</p>
        </div>
      </div>

      <div className={styles.footer}>Online</div>
    </div>
  );
}

export default CourseCard;
