import styled from "styled-components";

const CoffeeShowcase = () => {
  return (
    <Wrapper>
      <Title>
        {"Kev's Jakarta"}
        <br />
        <span>Coffee</span> Spot
      </Title>
      <Container>
        <MapContainer></MapContainer>
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
  font-size: 6rem;
  line-height: 5.5rem;

  & > span {
    color: #ff5100;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`;

const MapContainer = styled.div`
  position: relative;
`;
