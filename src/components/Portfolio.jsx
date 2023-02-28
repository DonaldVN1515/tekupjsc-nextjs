import Image from "next/image";
import { images } from "public/images";
import React from "react";

import styles from "../styles/home.module.css";

const PORTFOLIO = [
  {
    imageUrl: images.boxgo,
    title: "TOI 3D Customize E-commerce",
  },
  {
    imageUrl: images.summer21,
    title: "TOI 3D Customize E-commerce",
  },
  {
    imageUrl: images.image,
    title: "TOI 3D Customize E-commerce",
  },
  {
    imageUrl: images.image1,
    title: "TOI 3D Customize E-commerce",
  },
  {
    imageUrl: images.kiva,
    title: "TOI 3D Customize E-commerce",
  },
];
function Portfolio(props) {
  return (
    <div className={styles.portfolio}>
      {PORTFOLIO.map((item, index) => (
        <div className={styles.project} key={index}>
          <Image src={item.imageUrl} className={styles.image} alt="Portfolio" />
          <div className={styles.content}>
            <p>{item.title}</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

Portfolio.propTypes = {};

export default Portfolio;
