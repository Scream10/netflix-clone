import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const OPTIONS = [
  "accueil",
  "séries",
  "films",
  "nouveautés les plus regardées",
  "ma liste",
];

const Navbar: React.FC = () => {
  const [indexMenuActive, setIndexMenuActive] = useState<number>(0);

  const OptionsMenu = () => {
    return (
      <React.Fragment>
        {OPTIONS.map((option, index) => (
          <a
            className={styles.menu}
            onClick={() => setIndexMenuActive(index)}
            key={index}
          >
            <p
              className={`${styles.title} ${
                indexMenuActive === index ? styles.active : ""
              } ${inter.className}`}
            >
              {option}
            </p>
          </a>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className={styles.navbar}>
      <OptionsMenu />
    </div>
  );
};

export default Navbar;
