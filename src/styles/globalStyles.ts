import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* 1rem = 16px */
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem; /* 16px */
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }

  textarea {
    outline: none;
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    list-style: none;
  }

  h1 {
    font-size: 2rem; /* 32px */
  }

  h2 {
    font-size: 1.5rem; /* 24px */
  }

  h3 {
    font-size: 1.25rem; /* 20px */
  }

  h4, h5, h6, p {
    font-size: 1rem; /* 16px */
  }
  
`;
