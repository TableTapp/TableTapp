import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react' 

const theme = extendTheme({
  styles: {
    global: {
      "#root": {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "100vh",
      },
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
