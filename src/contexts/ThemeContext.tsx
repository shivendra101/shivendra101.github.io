import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available themes - add new themes here in the future
export const THEMES = ['theme1', 'theme2', 'theme3'] as const;
export type ThemeType = typeof THEMES[number];

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  setSpecificTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('theme1');

  const toggleTheme = () => {
    setTheme(prevTheme => {
      // Get current index and calculate next index with wrapping
      const currentIndex = THEMES.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      return THEMES[nextIndex];
    });
  };

  const setSpecificTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setSpecificTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};