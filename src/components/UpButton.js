import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(240, 189, 96, 0.99);
  }
  70% {
    box-shadow: 0 0 0 1rem rgba(240, 189, 96, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(240, 189, 96, 0);
  }
`;

const Button = styled.button`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  color: ${({ theme }) => theme.colors.bgSecondary};
  border: none;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  margin: 1rem;
  animation: ${pulse} 2s infinite;
  font-size: 1.5rem;
`;

const UpButton = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button onClick={scrollToTop}>
      <span className="iconify" data-icon="akar-icons:chevron-up"></span>
    </Button>
  );
};

export default UpButton;
