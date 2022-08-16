import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalsStyle'
import { ThemeProvider } from 'styled-components';
import 'assets/styles/fonts.css'
import {theme} from 'assets/styles/Theme'


const AppProviders = ({ children }) => {
    return (
 
          <ThemeProvider theme={theme}>      
                <GlobalStyle />
                {children}
          </ThemeProvider>
 
    );
  };
  
  export default AppProviders;