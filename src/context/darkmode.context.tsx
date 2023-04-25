import React, { createContext, useState } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: (checked: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(checked);
  };

  const value = { isDarkMode, toggleDarkMode };

  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};
