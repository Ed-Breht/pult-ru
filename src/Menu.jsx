import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import micro from "./Image/menu_Image/micro.jpg";
import microSE from "./Image/menu_Image/micro_se.jpg";
import adiva from "./Image/menu_Image/adiva.jpg";
import adivaSE from "./Image/menu_Image/adiva_se.jpg";
import microDroplet from "./Image/menu_Image/micro_droplet.jpg";
import microSeDroplet from "./Image/menu_Image/adiva_se_droplet.jpg";
import adivaDroplet from "./Image/menu_Image/adiva_droplet.jpg";
import adivaSeDroplet from "./Image/menu_Image/adiva_droplet.jpg";
import strada from "./Image/menu_Image/strada_2.jpg";
import subwoofers from "./Image/menu_Image/subwoofers.jpg";
import accessories from "./Image/menu_Image/accessories.jpg";
import clsx from "clsx";

const MenuItems = [
  { name: "micro", src: micro },
  { name: "micro se", src: microSE },
  { name: "adiva", src: adiva },
  { name: "adiva se", src: adivaSE },
  { name: "micro droplet", src: microDroplet },
  { name: "micro se droplet", src: microSeDroplet },
  { name: "adiva droplet", src: adivaDroplet },
  { name: "adiva se droplet", src: adivaSeDroplet },
  { name: "strada 2", src: strada },
  { name: "subwoofers", src: subwoofers },
  { name: "accessories", src: accessories },
];

const Menu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(MenuItems[0]);

  const onItemHover = (name) => {
    setActiveMenuItem(MenuItems.find((el) => el.name === name));
  };

  return (
    <div className={styles.MenuSlider}>
      <nav className={styles.nav}>
        {MenuItems.map((el) => {
          const isActive = activeMenuItem.name === el.name;
          return (
            <div
              className={
                !isActive
                  ? styles.MenuItem
                  : clsx(styles.MenuItem, styles.Active)
              }
              onMouseOver={() => onItemHover(el.name)}
            >
              <NavLink to="/">{el.name}</NavLink>
            </div>
          );
        })}
      </nav>
      <img src={activeMenuItem.src} className={styles.Image} />
    </div>
  );
};

export default Menu;
