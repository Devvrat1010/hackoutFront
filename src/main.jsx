import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router } from "react-router-dom";

import {} from '@mui/x-data-grid/themeAugmentation';
const theme = createTheme({
    components: {
        MuiDataGrid: {
          styleOverrides: {
            root: {
              backgroundColor: 'white',
            },
          },
        },
      },
    typography: {
        fontFamily: [
            'Poppins',
            'Bebas Neue',
            'sans-serif',
        ].join(',')},
    });

ReactDOM.createRoot(document.getElementById("root")).render(
<ThemeProvider theme={theme}>
    <Router>
        <ClerkProvider publishableKey={import.meta.env.VITE_REACT_APP_CLERK_KEY}>
            <App/>
        </ClerkProvider> 
    </Router>
</ThemeProvider>
  
);
