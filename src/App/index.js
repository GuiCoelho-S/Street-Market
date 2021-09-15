import GlobalStyle from "../components/GlobalStyle"
import AppRouter from "../router";
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#318829',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

export default function App(){


    return(
        <>
        <GlobalStyle />
        <BrowserRouter >
        <ThemeProvider theme={theme}>
        <AppRouter />
        </ThemeProvider>
        </BrowserRouter >
        </>
    )
}