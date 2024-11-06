"use client";

import Image from "next/image";
import styled from "styled-components";
import StoreInfo from "./StoreInfo";
import Pinpoint from "./Pinpoint";
import { useState, useEffect } from "react";
import { RESTAURANTS } from "../../common/restaurants";

const CoffeeShowcase = () => {
  const [currStoreId, setStoreId] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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
          {RESTAURANTS.map((restaurant) => (
            <Pinpoint
              key={restaurant.id}
              storeId={restaurant.id}
              storeName={restaurant.name}
              setStoreId={setStoreId}
              className={restaurant.className}
            />
          ))}
        </MapContainer>
        <StoreInfo currStoreId={currStoreId} />
      </Container>
    </Wrapper>
  );
};

export default CoffeeShowcase;

const Wrapper = styled.div`
  width: 70%;
  padding: 32px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: 5.5rem;
  line-height: 5rem;

  margin-left: 12.5%;

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
  margin-left: -8%;

  justify-content: center;
  align-items: flex-start;
  margin-top: 24px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 12px;
  }

  .tuku {
    left: 45%;
    top: 32%;
  }

  .naked-papa {
    left: 25%;
    top: 23%;
  }
  .nirwana {
    left: 30%;
    top: 25%;
  }
  .kancha {
    left: 22%;
    top: 38%;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 40%;
  min-width: 25rem;
  margin-top: -32px;

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

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-top: -40px;
  }
`;
