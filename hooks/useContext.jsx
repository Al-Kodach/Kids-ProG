import React, { useState, createContext } from "react";
const context = createContext();

function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => (
    setIsMenuOpen(prevState => !prevState)
  );

  return (
    <>
    <context.Provider value={{
      isMenuOpen,
      toggleMenu,
    }}>
      { children }
    </context.Provider>
    </>
  );
}

export { ContextProvider, context}
