import styled from "styled-components";
import { RESTAURANTS } from "../../../common/restaurants";
import Image from "next/image";
import Link from "next/link";

const StoreInfo = ({ currStoreId }) => {
  return (
    <InfoContainer>
      {currStoreId ? (
        <InfoWrapper>
          <TopContainer>
            <ProfilePicture>
              <div className="in"></div>
            </ProfilePicture>
            <div className="text">
              <p>{`${RESTAURANTS[currStoreId].name}`}</p>
              <h5>
                {RESTAURANTS[currStoreId].store} at{" "}
                {RESTAURANTS[currStoreId].location}
              </h5>
            </div>
          </TopContainer>
          <ImageWrapper>
            <Image
              src={RESTAURANTS[currStoreId].image}
              alt="store-img"
              width={320}
              height={320}
              objectFit="cover"
            />
          </ImageWrapper>
          <ActionsContainer>
            <div className="left">
              <Image
                src={"/static/assets/icons/desk.svg"}
                alt={""}
                width={20}
                height={20}
              />
              <Image
                src={"/static/assets/icons/desk.svg"}
                alt={""}
                width={20}
                height={20}
              />
              <Image
                src={"/static/assets/icons/desk.svg"}
                alt={""}
                width={20}
                height={20}
              />
            </div>
            <div className="right">
              <Link href={`${RESTAURANTS[currStoreId].gMaps}`} target="_blank">
                <Image
                  src={"/static/assets/icons/desk.svg"}
                  alt={""}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </ActionsContainer>
          <ContentContainer>
            <span className="username">{RESTAURANTS[currStoreId].store}</span>
            {` ${RESTAURANTS[currStoreId].description}`}
          </ContentContainer>
        </InfoWrapper>
      ) : (
        <NoInfoWrapper>
          <h1>Select a point in the map</h1>
          <h3>to see more information</h3>
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
  aspect-ratio: 3/4;
  min-width: 25%;
  max-width: 320px;
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

  img {
    transition: ease-out 0.33s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const NoInfoWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 2.25rem;
    padding: 12px;
    color: #ff5100;
  }
  & > h3 {
    font-weight: 300;
    font-size: 1.25rem;
    padding: 0 12px;
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
  width: 92.5%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.25rem;
  padding-bottom: 16px;

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

  .in {
    width: 85%;
    height: 85%;
    background-color: #003dc2;
    border-radius: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  & > img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1/1;
    object-position: center;
    object-fit: cover;
  }
`;
