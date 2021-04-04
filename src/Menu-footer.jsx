import React from "react";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

const MenuFooter = ({ MenuItems = [] }) => {
  return (
    <div className={styles.MenuFooter}>
      {MenuItems.map((el) => {
        return (
          <nav className={styles.navFoot}>
            {el.map((el) => (
              <div className={styles.FooterMenuItem}>
                <NavLink to="/">{el.name}</NavLink>
              </div>
            ))}
          </nav>
        );
      })}
    </div>
  );
};

export default MenuFooter;
