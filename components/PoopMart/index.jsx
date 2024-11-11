import styled from "styled-components";
import AuthForm from "./AuthForm";

const PoopMart = () => {
  return (
    <Wrapper>
      <AuthForm />
    </Wrapper>
  );
};

export default PoopMart;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  background-image: url("https://popmart.sg/cdn/shop/files/HironoReshapeSeries_5_750x.jpg?v=1704786659");
  background-size: cover;
  background-position: center;
`;
