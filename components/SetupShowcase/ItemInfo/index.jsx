import Image from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";

const ItemInfo = ({
  item: { name, description, link, infoPlacement = "bottom", icon },
  isActive = false,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Circle className="circle" />
      {isActive ? (
        <OutsideCircle className="circle" />
      ) : (
        <StaticOutsideCircle className="circle" />
      )}
      <InfoWrapper
        isHovering={isHovering}
        infoPlacement={infoPlacement}
        className="info"
      >
        <Triangle infoPlacement={infoPlacement} className="triangle" />
        <InfoContainer>
          <InfoIcon>
            <Image
              width={40}
              height={40}
              src={`/static/assets/icons/${icon}.svg`}
              alt={name}
            />
          </InfoIcon>
          <Info>
            <h5 className="name">{name}</h5>
            {description && <p className="description">{description}</p>}
            {link && (
              <a className="link" href={link} target="_blank" rel="noreferrer">
                Get item
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </a>
            )}
          </Info>
        </InfoContainer>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ItemInfo;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const InfoWrapper = styled.div`
  z-index: 6;
  position: absolute;
  padding: 20px;
  display: ${(props) => (props.isHovering ? "flex" : "none")};
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.infoPlacement === "top" &&
    css`
      top: -7rem;
      flex-direction: column-reverse;
      @media screen and (max-width: 960px) {
        top: -6.5rem;
      }
    `}

  ${(props) =>
    props.infoPlacement === "bottom" &&
    css`
      top: 2.5rem;
    `}

  ${(props) =>
    props.infoPlacement === "left" &&
    css`
      top: -3rem;
      right: 1.5rem;
      flex-direction: row-reverse;

      /* @media screen and (max-width: 960px) {
        top: -2.5rem;
      } */
    `}

  ${(props) =>
    props.infoPlacement === "right" &&
    css`
      top: -3rem;
      left: 1.5rem;
      flex-direction: row;

      @media screen and (max-width: 960px) {
        top: -2.2rem;
      }
    `}

  animation: ${(props) =>
    props.isHovering
      ? "fadeIn 0.4s ease-in-out forwards"
      : "fadeOut 0.4s ease-in-out forwards"};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-12%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0%);
    }
    to {
      opacity: 0;
      transform: translateY(-12%);
    }
  }
  transition: opacity 0.4s ease-in-out, transform 0.6s ease-in-out;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #000;
  border-radius: 12px;
  padding: 12px;
  gap: 12px;
  backdrop-filter: blur(10px);
`;

const InfoIcon = styled.div`
  min-width: 40px;
  min-height: 40px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  outline: 1px solid #ffffffd9;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  & > img {
    object-fit: contain;
    width: 75%;
    height: auto;
    opacity: 1;
  }

  @media screen and (max-width: 960px) {
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  min-width: max-content;
  max-width: 240px;

  @media screen and (max-width: 960px) {
    min-width: max-content;
    max-width: 200px;
    gap: 6px;
  }

  & > h5,
  & > p,
  & > a {
    margin: 0;
    text-align: left;
  }

  .name {
    font-size: 1.2em;
    @media screen and (max-width: 960px) {
      font-size: 1em;
    }
  }
  .description {
    font-size: 0.75em;
    opacity: 0.5;
    max-width: 200px;

    @media screen and (max-width: 960px) {
      font-size: 0.5em;
      max-width: 180px;
    }
  }

  .link {
    display: flex;
    align-items: center;
    gap: 1px;
    transition: ease-in-out 0.25s;
    opacity: 0.75;
    font-weight: 600;

    @media screen and (max-width: 960px) {
      font-size: 0.5;
      & > svg {
        width: auto;
        height: 1em;
      }
    }

    & > svg {
      transition: transform ease-in-out 0.3s, scale ease-in-out 0.15s;
    }

    &:hover {
      opacity: 1;
      & > svg {
        transform: scale(1.25) translateX(2px) rotate(-45deg);
      }
    }
  }
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: white;
  z-index: 5;
  backdrop-filter: blur(10px);
`;

const Triangle = styled.div`
  width: 0;
  height: 0;

  ${(props) =>
    props.infoPlacement === "bottom" &&
    css`
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 12px solid #000;
    `}

  ${(props) =>
    props.infoPlacement === "top" &&
    css`
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 12px solid #000;
    `}

  ${(props) =>
    props.infoPlacement === "left" &&
    css`
      border-left: 12px solid #000;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    `}

  ${(props) =>
    props.infoPlacement === "right" &&
    css`
      border-right: 12px solid #000;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    `}

    @media screen and (max-width: 960px) {
    ${(props) =>
      props.infoPlacement === "bottom" &&
      css`
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 8px solid #000;
      `}

    ${(props) =>
      props.infoPlacement === "top" &&
      css`
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid #000;
      `}

  ${(props) =>
      props.infoPlacement === "left" &&
      css`
        border-left: 8px solid #000;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      `}

  ${(props) =>
      props.infoPlacement === "right" &&
      css`
        border-right: 8px solid #000;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      `}
  }
`;

const OutsideCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: 1px solid white;
  opacity: 0.5;

  position: absolute;
  border-radius: 100%;

  animation: scale 3s ease-in-out infinite;

  z-index: 4;

  @keyframes scale {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    60% {
      transform: scale(2);
      opacity: 0.25;
    }
    80% {
      opacity: 0.05;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

const StaticOutsideCircle = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: 2px solid white;
  opacity: 0.25;

  position: absolute;
  border-radius: 100%;

  z-index: 4;
`;
