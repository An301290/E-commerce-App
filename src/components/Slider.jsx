import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIos />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Jacket</Title>
            <Description>The best quality for this summer</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Jacket</Title>
            <Description>The best quality for this summer</Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default Slider;
