import React, { createContext, useContext, useState } from 'react';

const ClicsContext = createContext();

export function utilitzaClics() {
  return useContext(ClicsContext);
}

export function ProveidorClics({ children }) {
  const [clicsGlobals, setClicsGlobals] = useState(0);

  const incrementaClicsGlobals = () => {
    setClicsGlobals((prevClics) => prevClics + 0.5);
  };

  return (
    <ClicsContext.Provider value={{ clicsGlobals, incrementaClicsGlobals }}>
      {children}
    </ClicsContext.Provider>
  );
}