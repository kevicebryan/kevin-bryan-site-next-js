import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  padding: 32px 24px;
  width: 55%;
  background: linear-gradient(223deg, #1f1f20 2.03%, #111 116.82%);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 90%;
  text-align: left;
  padding: 8px 12px;
  color: white;
  background-color: #0029ff;

  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

export const DateWrapper = styled.div`
  width: 90%;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-end;

  & > p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.75rem;

    & > span {
      font-size: 10px;
      opacity: 0.5;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 3;

  & > p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 1rem;
    letter-spacing: 1.25px;
    font-weight: 200;
    opacity: 0.6;
    margin: 0;
    line-height: 1.75rem;
    max-width: 90%;
  }
`;

export const SubHeader = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

export const ActionWrapper = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & > a,
  button {
    padding: 12px 32px;
    color: white;
    background-color: #0029ff;
    text-decoration: none;
    transition: ease-in-out 0.2s;
    font-weight: 700;
    font-size: 16px;

    &:hover {
      background-color: #0018ff;
      transform: translateY(-12%);
    }
  }
`;
