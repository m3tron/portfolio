import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  perspective: 1000px;
  margin: 1rem;

  &:hover {
    transform: rotateY(180deg);
    background: transparent;
    transition: 650ms;
  }
`;

const Desktop = styled.div``;

const Information = styled.div`
  position: relative;
  transition: 650ms;
  transform-style: preserve-3d;
`;

const Icon = styled.span`
  width: auto;
  height: 2rem;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const Project = ({ name, href, description, image, stack }) => {
  return (
    <Container>
      <Desktop>
        <img alt={name} src={image} height={250} width={450} />
      </Desktop>
      <Information>
        <h3>{name}</h3>
        <h4>{description}</h4>
        {stack.map(tech => (
          <a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="iconify" data-icon={tech.name}></Icon>
          </a>
        ))}
        <a href={href} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </Information>
    </Container>
  );
};

export default Project;
