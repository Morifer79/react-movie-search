import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		width: 100vw;
		overflow-x: hidden;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.black};
	letter-spacing: 0.03em;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.17;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		font-family: inherit;
		padding: 0;
		margin: 0;
	}
`;
