import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: black;
  color: white;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const BarContainer = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 100;
  width: 20px;
  height: 8px;
  top: 1rem;
  right: 1rem;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
  margin: 0 0 2px 0;
`;

const MobileNav = ({ socialLinks, pageLinks }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      MobileNav
      <BarContainer onClick={() => setOpen(!open)}>
        <Bar />
        <Bar />
        <Bar />
      </BarContainer>
      {open && (
        <div>
          {socialLinks.map(socialLink => (
            <div key={socialLink.name}>{socialLink.name}</div>
          ))}
          {pageLinks.map(pageLink => (
            <div key={pageLink.name}>{pageLink.name}</div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MobileNav;
