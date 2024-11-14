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
  max-width: 1080px;
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
    top: 10.5%;
    right: 26%;
    .circle {
      transform: rotate3d(1, 1, 0, 15deg);
    }
  }

  .headphone {
    left: 44.5%;
    top: 20%;
    .circle {
      transform: rotate3d(1, 1, 0, 25deg);
    }
  }

  .mouse {
    bottom: 15%;
    right: 37.5%;

    .circle {
      transform: rotate3d(1, 1, 0, -40deg);
    }
  }

  .desk {
    top: 52%;
    left: 31%;
  }

  .keyboard {
    bottom: 9.5%;
    left: 41.5%;
  }

  .mic {
    left: 26.5%;
    bottom: 38%;
  }

  .laptop {
    bottom: 33%;
    right: 40%;
  }

  .chair {
    top: 35%;
    left: 5%;

    .circle {
      transform: rotate3d(0, 1, 0, -15deg);
    }
  }
`;
