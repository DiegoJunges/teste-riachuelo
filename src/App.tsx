import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/theme/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
