import { createGlobalStyle } from 'styled-components'
// import './normalize.css'

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: auto;
    font-family: 'Geomanist', sans-serif;
    font-style: normal;
    font-weight: 400;
    /* background: #ffffff; */
  }
`
