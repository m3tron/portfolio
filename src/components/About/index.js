import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 4rem 1rem 0 1rem;
  padding-top: 4rem;
`;

const About = () => {
  return (
    <Container id="about">
      I'm a MERN stack developer and a motorcycle enthusiast. I love the
      challenge that learning new things brings on. sagittis vitae et leo duis
      ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi
      blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada
      pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis
      parturient montes nascetur ridiculus mus mauris vitae ultricies leo
      integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus
      vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem
      nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est
      ultricies integer quis auctor elit sed vulputate mi sit amet mauris
      commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula
    </Container>
  );
};

export default About;
