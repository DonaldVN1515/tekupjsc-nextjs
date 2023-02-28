import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/home.module.css";
const PAGES = [
  {
    to: "/",
    route: "All",
  },
  {
    to: "/#",
    route: "Manpower Supply",
  },
  {
    to: "/#",
    route: "Mobile App Websites",
  },
  {
    to: "/#",
    route: "UI/UX Design",
  },
];

function Header(props) {
  const router = useRouter();

  console.log(router);
  return (
    <nav className={styles.nav}>
      {/* <Link
        href="/"
        className={`${styles.item} ${router.pathname == "/" ? "active" : ""}`}
      >
        All
      </Link> */}
      {PAGES.map((item, index) => (
        <Link
          href={item.to}
          className={`${styles.item} ${
            router.pathname == item.to ? styles.active : ""
          }`}
          key={index}
        >
          {item.route}
        </Link>
      ))}
    </nav>
  );
}

Header.propTypes = {};

export default Header;
