import { Container } from "@material-ui/core";
import React from "react";
import styles from "./General.module.scss";
import SwipeableTextMobileStepper from "./сarusel";
import logoPult from "./Image/Logo_pult-footer.svg";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";
import MenuFooter from "./Menu-footer";
import logo from "./Image/logo_pult.svg";
import gallo from "./Image/Gallo_Acoustics.svg";
import SwipeableTextMobileStepperSecond from "./Carusel-sale";
import { MenuItems, Points, PointSale } from "./State-Arrays";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <div className={styles.Header}>
          <div>
            <a href="/">
              <img src={gallo} />
            </a>
          </div>
          <div>
            <a href="/">
              <img src={logo} />
            </a>
          </div>
        </div>
        <div className={styles.Content}>
          <div className={styles.Slider}>
            <SwipeableTextMobileStepper images={Points} />
          </div>
          <div className={styles.Content}>
            <SwipeableTextMobileStepperSecond images={PointSale} />
          </div>
          <div className="Menu">
            <Menu />
          </div>
        </div>
        <div className={styles.Footer}>
          <div className={styles.leftFooter}>
            <a href="/">
              <img src={logoPult} className={styles.img} />
            </a>
            <div>
              <div className={styles.Phone}>8(800)555-51-52</div>
              <div className={styles.PhoneText}>
                ЗВОНОК ПО РОССИИ БЕСПЛАТНЫЙ
              </div>
            </div>
          </div>
          <div className={styles.FooterColumns}>
            <MenuFooter MenuItems={MenuItems} />
          </div>
        </div>
        <div className={styles.Copyright}>
          2021 © / PULT.RU / ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
