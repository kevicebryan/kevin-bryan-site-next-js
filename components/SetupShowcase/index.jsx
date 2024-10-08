import styled from "styled-components";
import ItemInfo from "./ItemInfo";
import { PERIPHERALS } from "../../common/peripherals";
import Image from "next/image";

const SetupShowcase = () => {
  return (
    <Container className="showcase">
      {PERIPHERALS.map((peripheral, index) => (
        <div className={peripheral.id} key={peripheral.id}>
          <ItemInfo item={peripheral} isActive={index === 0} />
        </div>
      ))}
      <Image
        src={"/static/assets/setup.jpeg"}
        alt="setup"
        width={1920}
        height={1080}
        objectFit="contain"
        loading="lazy"
      />
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

  & > img {
    border-radius: 16px;
    transition: ease-in-out 0.5s;
    width: 100%;
    height: auto;
  }

  & > div {
    position: absolute;
  }

  .monitor {
    top: 28%;
    left: 25%;
  }

  .headphone {
    left: 52%;
    bottom: 28%;
  }

  .mouse {
    top: 62%;
    left: 42%;
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
    left: 13%;
    bottom: 22%;
  }

  .laptop {
    bottom: 18%;
    left: 28%;
  }

  .chair {
    bottom: 40%;
    right: 8%;
  }

  @media screen and (max-width: 768px) {
  }
`;
