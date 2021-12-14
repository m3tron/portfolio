import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  perspective: 1000px;
  z-index: -10;

  &:hover {
    transform: rotateY(180deg);
    background: transparent;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Desktop = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Information = styled.div`
  position: relative;
  transition: 650ms;
  transform-style: preserve-3d;
`;

const Project = ({ name, url, description, desktopImage, mobileImage }) => {
  return (
    <Container>
      <Mobile>
        <Image src={mobileImage} height={500} width={250} />
      </Mobile>
      <Desktop>
        <Image src={desktopImage} height={250} width={450} />
      </Desktop>
      <Information>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <div>Tech stack</div>
        <a href={url}>Website</a>
      </Information>
    </Container>
  );
};

export default Project;
