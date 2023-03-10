import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // Styles Reset Code
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
  address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
  tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after {
    content: "";
    content: none;
  }
  q:before, q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
  }
  // Element Styles
  body {
    background-color: ${({theme}) => theme.colors.navy};

    &::-webkit-scrollbar {
      width: 12px; 
    }
    &::-webkit-scrollbar-track {
      background-color: ${({theme}) => theme.colors.navy};
    }
    &::-webkit-scrollbar-thumb {
      ${({theme}) => `
        background-color: ${theme.colors.darkSlate};
        border: 3px solid ${theme.colors.navy};
      `}
      border-radius: 10px;
    }
  }

  ::selection {
    ${({theme}) => `
      background-color: ${theme.colors.lightestNavy};
      color: ${theme.colors.lightestSlate}; 
    `}
  }

  .fullname {
    ${({theme}) => `
      color: ${theme.colors.lightestSlate};
      font-family: ${theme.fonts.primary};
    `}
    font-size: 65px;
    font-weight: 700;
    margin: 30px 0 20px;
  }

  .active {
    color: ${({theme}) => theme.colors.green};
  }
`;

export default GlobalStyles;