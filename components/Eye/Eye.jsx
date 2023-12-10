import classes from "./eye.module.css";

import React, { useEffect, useRef } from "react";
import { useRafLoop } from "react-use";
import lerp from "@14islands/lerp";

const Eye = ({ initialRotation, mouse, isMouseOver }) => {
  const arrowRef = useRef();
  const arrowRect = useRef();
  const initialTop = useRef(0);

  const angle = useRef({
    current: initialRotation,
    target: initialRotation,
  }).current;

  const closestAngle = (from, to) => {
    return from + ((((to - from) % 360) + 540) % 360) - 180;
  };

  useEffect(() => {
    const onResize = () => {
      if (arrowRef.current) {
        arrowRect.current = arrowRef.current.getBoundingClientRect();

        initialTop.current = arrowRect.current.top + window.pageYOffset;
      }
    };

    window.addEventListener("resize", onResize);

    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useRafLoop(() => {
    if (!arrowRef.current || !arrowRect.current) return;

    if (isMouseOver) {
      const { width, height, left } = arrowRect.current;

      const currentTop = initialTop.current - window.pageYOffset;

      const arrowCenterPosition = {
        x: left + width / 2,
        y: currentTop + height / 2,
      };

      const distanceX = mouse.x - arrowCenterPosition.x;
      const distanceY = mouse.y - arrowCenterPosition.y;

      const angleInRadians = Math.atan2(distanceX, -distanceY);
      const angleInDegrees = angleInRadians * (180 / Math.PI);

      angle.target = angleInDegrees;
    } else {
      angle.target = initialRotation;
    }

    angle.target = closestAngle(angle.current, angle.target);

    angle.current = lerp(angle.current, angle.target, 0.1);

    arrowRef.current.style.transform = `rotate(${angle.current}deg)`;
  });

  return (
    <div
      ref={arrowRef}
      className={classes.eye}
      style={{ transform: `rotate(${initialRotation}deg)` }}
    >
      <div className={classes.eyeBall}></div>
    </div>
  );
};

export default Eye;
