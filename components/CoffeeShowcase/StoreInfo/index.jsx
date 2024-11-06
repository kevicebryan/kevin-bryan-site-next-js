import styled from "styled-components";
import { RESTAURANTS } from "../../../common/restaurants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const StoreInfo = ({ currStoreId }) => {
  const [hoveringItem, setHoveringItem] = useState(null);

  const handleHoveringItem = (item) => {
    setHoveringItem(item);
  };

  return (
    <InfoContainer>
      {currStoreId ? (
        <InfoWrapper>
          <TopContainer>
            <Link
              href={"https://www.instagram.com/kurubu____eats/"}
              target="_blank"
            >
              <ProfilePicture>
                <div className="in"></div>
              </ProfilePicture>
            </Link>
            <div className="text">
              <p>{`${RESTAURANTS[currStoreId - 1].name}`}</p>
              <h5>
                {RESTAURANTS[currStoreId - 1].store} at{" "}
                {RESTAURANTS[currStoreId - 1].location}
              </h5>
            </div>
          </TopContainer>
          <ImageWrapper>
            <Image
              src={RESTAURANTS[currStoreId - 1].image}
              alt="store-img"
              width={320}
              height={320}
              objectFit="cover"
            />
          </ImageWrapper>
          <ActionsContainer>
            <div className="left">
              <HoverableInfo
                onMouseEnter={() => handleHoveringItem("taste")}
                onMouseLeave={() => setHoveringItem(null)}
              >
                <Image
                  src={"/static/assets/icons/taste.svg"}
                  alt={"taste"}
                  width={24}
                  height={24}
                />
                {hoveringItem === "taste" && (
                  <p>
                    {RESTAURANTS[currStoreId - 1].taste}
                    <span>{" / 5"}</span>
                  </p>
                )}
                {/* <Tooltip isHovering={hoveringItem === "taste"}>Taste</Tooltip> */}
              </HoverableInfo>

              <HoverableInfo
                onMouseEnter={() => handleHoveringItem("ambience")}
                onMouseLeave={() => setHoveringItem(null)}
              >
                <Image
                  src={"/static/assets/icons/ambience.svg"}
                  alt={"ambience"}
                  width={24}
                  height={24}
                />
                {hoveringItem === "ambience" && (
                  <p>
                    {RESTAURANTS[currStoreId - 1].ambience}
                    <span>{" / 5"}</span>
                  </p>
                )}
                {/* <Tooltip isHovering={hoveringItem === "ambience"}>
                  Ambience
                </Tooltip> */}
              </HoverableInfo>

              <HoverableInfo
                onMouseEnter={() => handleHoveringItem("worth")}
                onMouseLeave={() => setHoveringItem(null)}
              >
                <Image
                  src={"/static/assets/icons/worth.svg"}
                  alt={"worth"}
                  width={24}
                  height={24}
                />
                {hoveringItem === "worth" && (
                  <p>
                    {RESTAURANTS[currStoreId - 1].worth}
                    <span>{" / 5"}</span>
                  </p>
                )}
                {/* <Tooltip isHovering={hoveringItem === "worth"}>Worth</Tooltip> */}
              </HoverableInfo>
            </div>
            <div className="right">
              <Link
                href={`${RESTAURANTS[currStoreId - 1].gMaps}`}
                target="_blank"
                onMouseEnter={() => handleHoveringItem("map")}
                onMouseLeave={() => setHoveringItem(null)}
              >
                <Image
                  src={"/static/assets/icons/map.svg"}
                  alt={""}
                  width={24}
                  height={24}
                />
                <Tooltip isHovering={hoveringItem === "map"}>
                  Open in Google Maps
                </Tooltip>
              </Link>
            </div>
          </ActionsContainer>
          <ContentContainer>
            <span className="username">
              {RESTAURANTS[currStoreId - 1].store}
            </span>
            {` ${RESTAURANTS[currStoreId - 1].description}`}
          </ContentContainer>
        </InfoWrapper>
      ) : (
        <NoInfoWrapper>
          <Image
            src="/static/assets/krusty-krab.png"
            alt="krusty-krab"
            width={500}
            height={300}
          />
          <h1>Select one of the pins on the map</h1>
          <h3>{`to see my "unbias" review of their food`}</h3>
        </NoInfoWrapper>
      )}
    </InfoContainer>
  );
};

export default StoreInfo;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #6c6c6c;
  background-color: #6c6c6c08;
  width: 22.5rem;
  height: 30.25rem;
  font-family: Arial, Helvetica, sans-serif;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .right {
    a {
      position: relative;
    }
  }

  img {
    transition: ease-out 0.33s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NoInfoWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;

  & > img {
    width: 90%;
    height: auto;
    object-fit: contain;
    margin-bottom: 12px;
  }

  & > h1 {
    font-size: 1.5rem;
    padding: 12px;
    color: #ff5100;
  }
  & > h3 {
    font-weight: 300;
    font-size: 1rem;
    padding: 0 12px;
    opacity: 0.6;
  }

  & > h1,
  h3 {
    margin: 0;
    text-align: center;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 16px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    & > p {
      margin: 0;
      font-size: 1rem;
    }

    & > h5 {
      margin: 0;
      font-size: 0.75rem;
      font-weight: 300;
      opacity: 0.75;
    }
  }
`;

const ContentContainer = styled.p`
  padding: 0 16px;
  margin: 0;
  width: 91.5%;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 1rem;
  padding-bottom: 16px;

  overflow-y: scroll;
  overflow-x: hidden;
  height: 48px;

  & > span {
    font-weight: 600;
  }
`;

const ProfilePicture = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #833ab4;
  background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
  border-radius: 100%;
  transition: ease-in-out 0.3s;

  .in {
    width: 85%;
    height: 85%;
    background-color: #003dc2;
    border-radius: 100%;
    transition: ease-in-out 1s;
  }

  &:hover {
    .in {
      width: 90%;
      height: 90%;
      transition: ease-in-out 1s;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 5/4;
    height: auto;

    object-position: center;
    object-fit: cover;
  }
`;

const HoverableInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  & > p {
    font-size: 1.1rem;
    margin: 0;
    font-weight: bold;

    & > span {
      font-weight: 300;
      font-size: 0.8rem;
    }
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 40px;
  left: 12px;
  min-width: max-content;
  background-color: #1824b4;
  color: white;
  padding: 8px 12px;
  border-radius: 12px;
  margin: 0;
  transition: ease-in 0.3s;
  font-size: 0.85rem;
  opacity: ${(props) => (props.isHovering ? 1 : 0)};
  transform: scale(${(props) => (props.isHovering ? 1 : 0.8)});
`;
