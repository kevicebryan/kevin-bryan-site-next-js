import styled from "styled-components";
import ItemInfo from "./ItemInfo";
import { PERIPHERALS } from "../../common/peripherals";
import Image from "next/image";

const SetupShowcase = () => {
  return (
    <Container className="showcase">
      <Image
        src={"/static/assets/setup.jpeg"}
        alt="setup"
        width={1920}
        height={1080}
        objectFit="contain"
        loading="lazy"
      />
      {PERIPHERALS.map((peripheral, index) => (
        <div className={peripheral.id} key={peripheral.id}>
          <ItemInfo item={peripheral} isActive={index % 2 === 0} />
        </div>
      ))}
    </Container>
  );
};

export default SetupShowcase;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 900px;
  max-width: 1280px;
  max-height: 720px;

  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  background-color: #32323247;
  border-radius: 16px;

  @media screen and (max-width: 960px) {
    min-width: auto;
    width: auto;
    aspect-ratio: 16/9;
    height: 480px;
  }

  & > img {
    border-radius: 16px;
    transition: ease-in-out 0.5s;
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;
  }

  & > div {
    position: absolute;
  }

  .monitor {
    top: 24%;
    left: 26.5%;
  }

  .headphone {
    left: 52%;
    bottom: 28%;
  }

  .mouse {
    top: 61%;
    left: 41.5%;

    .circle {
      transform: rotate3d(1, 1, 0, -40deg);
    }
  }

  .desk {
    bottom: 15%;
    right: 33%;
  }

  .keyboard {
    bottom: 18%;
    left: 40%;
  }

  .mic {
    left: 13.5%;
    bottom: 20%;
  }

  .laptop {
    bottom: 33%;
    left: 30%;
  }

  .chair {
    bottom: 40%;
    right: 8%;

    .circle {
      transform: rotate3d(0, 1, 0, 30deg);
    }
  }
`;
