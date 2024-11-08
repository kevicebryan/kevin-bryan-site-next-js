"use client";

import Image from "next/image";
import { useState } from "react";

const { styled } = require("styled-components");

const Pinpoint = ({ className, storeName, storeId, setStoreId }) => {
  const [onHover, setOnHover] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(true);
    setStoreId(storeId);
  };

  return (
    <PinpointContainer className={className}>
      {onHover && <p>{storeName || "Kev's Coffeestop"}</p>}
      <Image
        src="/static/assets/icons/pinpoint.svg"
        alt="pinpoint"
        width={32}
        height={32}
        objectFit="contain"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setOnHover(false)}
      />
    </PinpointContainer>
  );
};

const PinpointContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  transition: ease-in 0.4s;
  filter: grayscale() brightness(250%);
  opacity: 0.75;

  & > p {
    position: absolute;
    bottom: 24px;
    width: max-content;
    text-align: center;
    transform: rotate(8deg) scale(0.9);
    color: #ffc215;
    background-color: #1d1d1deb;
    border-radius: 12px;
    padding: 8px 12px;
  }

  &:hover {
    opacity: 1;
    filter: none;
    transform: scale(1.2) rotate(-12deg);
    z-index: 10;
  }
`;

export default Pinpoint;
