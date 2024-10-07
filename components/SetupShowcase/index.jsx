import styled from "styled-components";
import ItemInfo from "./ItemInfo";
import { PERIPHERALS } from "../../common/peripherals";

const SetupShowcase = () => {
  return (
    <Container className="showcase">
      {PERIPHERALS.map((peripheral, index) => (
        <div className={peripheral.id} key={peripheral.id}>
          <ItemInfo item={peripheral} isActive={index === 0} />
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
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  background-color: #32323247;
  border-radius: 16px;

  & > div {
    position: absolute;
  }

  .monitor {
    top: 4em;
    left: 4em;
  }

  .desk {
    top: 12em;
    left: 6em;
  }

  .mouse {
    top: 12em;
    left: 25em;
  }

  .keyboard {
    top: 8em;
    left: 8em;
  }

  .mic {
    top: 5;
    right: 4em;
  }

  .laptop {
    top: 12em;
    right: 6em;
  }

  @media screen and (max-width: 768px) {
  }
`;
