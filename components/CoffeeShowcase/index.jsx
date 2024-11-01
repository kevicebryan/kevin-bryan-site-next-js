import Image from "next/image";
import styled from "styled-components";
import StoreInfo from "./StoreInfo";
import Pinpoint from "./Pinpoint";
import { useState } from "react";

const CoffeeShowcase = () => {
  const [currStoreId, setStoreId] = useState(null);

  return (
    <Wrapper>
      <Title>
        {"Kev's Curated "}
        <br />
        <span>Jakarta </span>Food Stop
      </Title>
      <Container>
        <MapContainer>
          <Image
            src="/static/assets/jakarta_map.png"
            alt="jakarta-map"
            width={640}
            height={640}
            objectFit="contain"
          />
          <Pinpoint
            className={"point"}
            storeId={1}
            storeName={"Naked Papa"}
            setStoreId={setStoreId}
          />
        </MapContainer>
        <StoreInfo currStoreId={currStoreId} />
      </Container>
    </Wrapper>
  );
};

export default CoffeeShowcase;

const Wrapper = styled.div`
  width: 80%;
  padding: 32px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 5.5rem;
  line-height: 5rem;

  & > span {
    color: #ff5100;
  }

  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
    line-height: 2.25rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 64px;
  padding: 40px;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 12px;
  }
`;

const MapContainer = styled.div`
  position: relative;
  max-width: 50%;

  & > img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    opacity: 0.5;
    transition: ease-in-out 0.33s;
    z-index: 1;

    &:hover {
      opacity: 0.65;
    }
  }

  .point {
    left: 25%;
    top: 25%;
  }

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-top: -40px;
  }
`;
