import { createContext, useState, useContext } from 'react';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

export type ThemeContextProps = {
  theme: typeof dark;
  handleToggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<typeof dark>(dark);

  const handleToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  const { theme, handleToggleTheme } = context;

  return { theme, handleToggleTheme };
};
