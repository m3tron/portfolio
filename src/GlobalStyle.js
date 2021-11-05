import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bgone: #21222c;
    --bgtwo: #954827;
    --text:#ffb86c;
  }

  body{
    ${"" /* font-family: 'Baloo 2', cursive; */}
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to bottom right, var(--bgone) 0%, var(--bgtwo) 100%);
    background-size: 200% 200%;
    animation: movingGradient 5s ease-in-out infinite alternate;
    color:var(--text)
  }
  
  @keyframes movingGradient{
  from {background-position: 0 0;}
  to {background-position: 100% 100%}
}
`;

export default GlobalStyle;
