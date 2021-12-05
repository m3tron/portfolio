import styled from "styled-components";
import Image from "next/image";

const ImageWrapper = styled.div`
  height: 100px;
  width: 200px;
  background: white;
`;

const Project = () => {
  return (
    <div>
      <ImageWrapper></ImageWrapper>
      <h3>ProjectName</h3>
      <h4>Description</h4>
      <div>Tech stack</div>
    </div>
  );
};

export default Project;
