import React, { useEffect, useState } from "react";
import anime from "animejs";
import styles from "./dotgrid.module.css";

const GRID_WIDTH = 59;
const GRID_HEIGHT = 13;

const DotGrid = () => {
  const [animationComplete, setAnimationComplete] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (animationComplete) {
        const randomIndex = Math.floor(
          Math.random() * GRID_WIDTH * GRID_HEIGHT
        );
        handleDotClick({ target: { dataset: { index: randomIndex } } });
      }
    }, 1500); // Trigger every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [animationComplete]);

  const handleDotClick = (e) => {
    if (!animationComplete) return; // Prevent triggering animation if it's ongoing

    setAnimationComplete(false); // Disable further triggers during animation

    anime({
      targets: `.${styles.dotPoint}`,
      scale: [
        { value: 1.5, easing: "easeOutSine", duration: 50 },
        { value: 1, easing: "easeInOutQuad", duration: 100 },
      ],
      translateY: [
        { value: 30, easing: "easeOutSine", duration: 100 },
        { value: 0, easing: "easeInOutQuad", duration: 100 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 20 },
        { value: 0.25, easing: "easeInOutQuad", duration: 100 },
      ],
      delay: anime.stagger(40, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
      complete: () => {
        setAnimationComplete(true); // Re-enable triggers once the animation is complete
      },
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div className={styles.gridItem} data-index={index} key={`${i}-${j}`}>
          <div className={styles.dotPoint} data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.gridWrapper}
    >
      {dots}
    </div>
  );
};

export default DotGrid;
