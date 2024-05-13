import { useEffect, useState } from 'react';

export const useMode = () => {
  const [theme, setTheme] = useState<string | null>();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return { theme, toggleTheme };
};
