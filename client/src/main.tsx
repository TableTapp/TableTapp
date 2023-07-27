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
        color: '#2D3748',
      },
      body: {
        color: '#2D3748',
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
