"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const ProjectsHeader = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    window.location.href = `mailto:kevinbryanreligion@gmail.com?subject=Hi Kev! I Saw your website, let's work together!`;
  };

  return (
    <Wrapper>
      <h1>Kevin's Work Gallery</h1>
      <Cta>
        <p>Interested in working together? Feel free to </p>
        <ButtonWrapper>
          <ReachOutButton
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            reach out!
          </ReachOutButton>
          <ShadowButton isHovering={isHovering} />
        </ButtonWrapper>
      </Cta>
    </Wrapper>
  );
};

export default ProjectsHeader;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  margin-top: 100px;
  margin-bottom: 64px;

  & > h1 {
    font-weight: 700;
    font-size: 4rem;
    margin: 0;
  }
`;

const Cta = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  & > p {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReachOutButton = styled.button`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  border: none;
  background: none;
  color: white;
  font-family: monospace;
  cursor: url("/static/assets/cursor/pointer.svg"), pointer;
  transition: ease-in-out 0.2s;
  position: relative;
  z-index: 2;

  &:hover {
    padding: 12px 24px;
    border-radius: 12px;
    margin: 0 12px;
    background: linear-gradient(-45deg, #a770ef, #1029ba, #cf8bf3);
    background-size: 400%;
    animation: ${gradientAnimation} 8s linear infinite;
    text-transform: uppercase;
    outline: 1px solid rgba(255, 255, 255, 0.25);
    font-weight: 700;
  }
`;

// Shadow button with dynamic opacity based on isHovering prop
const ShadowButton = styled.div`
  position: absolute;
  width: 160px;
  height: 80px;
  border-radius: 50px;
  background: linear-gradient(-45deg, #a770ef, #1029ba, #cf8bf3);
  background-size: 600%;
  filter: blur(30px);
  opacity: ${(props) =>
    props.isHovering ? 0.6 : 0}; // Conditionally set opacity
  animation: ${gradientAnimation} 8s linear infinite;
  top: -12px;
  right: -12px; /* Adjust position slightly to give depth */
  z-index: 1;
  transition: ease-in-out 0.5s;
`;
