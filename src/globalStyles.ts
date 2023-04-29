import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
  }
  
  :root {

	font-family: 'Poppins', sans-serif;
	line-height: 1.5;
	font-weight: 400;
  }
  
  a {
	font-weight: 500;
	text-decoration: inherit;
  }
  a:hover {
	color: #535bf2;
  }
  
  body {
	margin: 0;
	width: 100vw;
	height: 100vh;
  }
  
  h1 {
	font-size: 3.2em;
	line-height: 1.1;
  }
  
  button {
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #1a1a1a;
	cursor: pointer;
	transition: border-color 0.25s;
  }
  button:hover {
	border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
	outline: 4px auto -webkit-focus-ring-color;
  }
  
`;

export default GlobalStyle;
