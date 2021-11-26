import './App.css';
import {Suspense} from 'react'
import { ThemeProvider,createTheme,makeStyles } from '@material-ui/core/styles';
import {ErrorBoundary} from "./utils/ErrorBoundary";
import FullSpinner from "./utils/Spinner";
import AuthorizedApp from "./App/AuthorizedApp";
import UnAuthorizedApp from "./App/UnAuthorizedApp";
const theme = createTheme({
    mainBlue:'#1976d2',
    hoverBlue:'#1E90FF',
    redColor: '#f00',
    redColorHover: '#af0101',
    blackColor: '#232323',
    mainBlackColor: '#21282f',
    mainBlackColorHover: '#444444',
    breakpoints: {
        values: {
            xs: 320,
            sm: 767,
            md: 920,
            lg: 1280,
            xl: 1920,
        },
    },
})


const useStyles = makeStyles((theme) => ({
    '@global': {
        '.MuiDivider-root': {
            background: '#777777'
        },
        '.MuiOutlinedInput-root': {
            borderRadius: '0px'
        },
        '.MuiTypography-colorPrimary': {
            color: theme.mainBlackColor,
        },
        '.MuiTypography-colorInherit': {
            color: theme.mainBlue
        }
    }
}));
function App() {
  useStyles();
  return (
      <ThemeProvider theme={theme}>
          <ErrorBoundary>
              <Suspense fallback={<FullSpinner />}>
                <UnAuthorizedApp/>
              </Suspense>
          </ErrorBoundary>
      </ThemeProvider>
  );
}

export default App;
