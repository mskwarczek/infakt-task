import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 5vh 5vw;
    background-color: ${({ theme }) => theme.color.bg.primary};
    color: ${({ theme })  => theme.color.text.primary};
    font-family: ${({ theme })  => theme.fontFamily};
    font-size: ${({ theme })  => theme.fontSize.medium};
    font-weight: ${({ theme })  => theme.fontWeight.normal};
  }
`;
 
export default GlobalStyle;
