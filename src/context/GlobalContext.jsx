import React, { createContext, useState } from "react";

// Creación del contexto con un valor por defecto (opcional)
export const GlobalContext = createContext({
  user: null,
  setUser: () => {}
});

export function GlobalContextProvider({ children }) {
  // Estado para almacenar información del usuario
  const [user, setUser] = useState(null);

  // Puedes agregar más estados y funciones según necesites
  const [theme, setTheme] = useState('light');

  // El valor que pasas al Provider debe incluir tanto el estado como las funciones para modificarlo
  const value = {
    user,
    setUser,
    theme,
    setTheme
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}