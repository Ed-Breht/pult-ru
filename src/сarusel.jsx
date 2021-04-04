import React from "react";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styles from "./carusel.module.scss";
import clsx from "clsx";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper({ images = [] }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getPointClasses = (step) =>
    clsx(styles.p, activeStep === step && styles.active);

  return (
    <div>
      <div className={styles.WrapSlider}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label} className={styles.ImgWrapper}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={styles.Img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <div className={styles.SliderCaption}>
          <div className={styles.ImageText}>{images[activeStep].subText}</div>
          <div className={styles.Info}>
            <div className={styles.InfoText}>
              {images[activeStep].subInfoText}
            </div>
            <div className={styles.SubInfoText}>
              {images[activeStep].infoText}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.points}>
        <div
          className={getPointClasses(0)}
          onClick={() => handleStepChange(0)}
        ></div>
        <div
          className={getPointClasses(1)}
          onClick={() => handleStepChange(1)}
        ></div>
        <div
          className={getPointClasses(2)}
          onClick={() => handleStepChange(2)}
        ></div>
      </div>
    </div>
  );
}

export default SwipeableTextMobileStepper;
