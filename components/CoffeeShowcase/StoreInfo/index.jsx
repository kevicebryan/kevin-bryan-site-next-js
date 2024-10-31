import styled from "styled-components";

const StoreInfo = () => {
  return <InfoContainer></InfoContainer>;
};

export default StoreInfo;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #6c6c6c;
  background-color: #6c6c6c08;
  aspect-ratio: 4/5;
  min-width: 35%;
  height: 80%;
`;
