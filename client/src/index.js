import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // app background
      paper: "#1e1e1e",   // card background
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> {/* applies global dark background */}
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
