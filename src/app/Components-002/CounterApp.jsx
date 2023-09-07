"use client";

import { useState } from "react";
import styles from "./Counter.module.css";

const counter = () => {
  const [Num, setNum] = useState(0);
  const [Situation, setSituation] = useState("عادی");

  const handleAdd = () => {
    if (Num <= 16) {
      setSituation("عادی");
    }
    if (Num >= 15) {
      setSituation("غیرمعمول");
    }
    if (Num >= 20) {
      setSituation("خطر");
    }

    setNum((prevState) => {
      return prevState + 1;
    });
  };

  const handleMinus = () => {
    if (Num <= 16) {
      setSituation("عادی");
    } else if (Num >= 15) {
      setSituation("غیرمعمول");
    } else if (Num >= 20) {
      setSituation("خطر");
    }

    setNum((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div>
      <div className={styles.positionBox1}>
        <div
          className={`${styles.h1Padding} ${
            Num >= 10 ? styles.bGred : styles.bGwhite
          }`}
        >
          <h1>شمارنده</h1>
          <h1>{Num}</h1>
          <div className={styles.ButtonFlex}>
            <button onClick={handleAdd}>افزایش</button>
            <button onClick={handleMinus}>کاهش</button>
          </div>
          <h1>{Situation}</h1>
        </div>
      </div>
    </div>
  );
};

export default counter;
