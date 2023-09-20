import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    bernred: '#e50914',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '25px',
  },
  spacing: value => `${value * 2}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
