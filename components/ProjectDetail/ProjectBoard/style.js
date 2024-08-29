import styled from "styled-components";

export const BoardContainer = styled.div`
  position: relative;
  width: 42%;
  border: 2px solid #fffeee;
  border-radius: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    width: 95%;
    height: auto;
    max-height: 90%;
    object-fit: contain;
    filter: brightness(0.95);
    transition: ease-in-out 0.2s;
  }
`;

export const ImageContainer1 = styled.div`
  width: 320px;
  height: 240px;
  position: absolute;
  background: white;
  top: 15%;
  left: -12px;

  transition: ease-in-out 0.2s;
  transform: rotate(-8deg) scale(1.25);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotate(-5deg) scale(1.28);
    z-index: 2;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);

    img {
      filter: brightness(1) saturate(1.1);
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer2 = styled.div`
  width: 320px;
  height: 240px;

  position: absolute;
  background: white;
  bottom: 15%;
  right: -12px;

  transition: ease-in-out 0.2s;
  transform: rotate(12deg) scale(1.2);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    transform: rotate(8deg) scale(1.23);
    z-index: 2;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.25);

    & > img {
      filter: brightness(1) saturate(1.1);
      transform: scale(1.1);
    }
  }
`;
