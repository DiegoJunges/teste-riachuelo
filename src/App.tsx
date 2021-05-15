import Layout from './components/Layout';
import ThemeProvider from './context/theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
