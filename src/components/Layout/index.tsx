import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../context/theme';
import GlobalStyles from '../../styles/GlobalStyles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
