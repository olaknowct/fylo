import { createContext, useState } from 'react';

export const DarkModeContext = createContext({
  isDarkMode: Boolean,
});

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(checked);
  };

  const value = { isDarkMode, toggleDarkMode };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};
