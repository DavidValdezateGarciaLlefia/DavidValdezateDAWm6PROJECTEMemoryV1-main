import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [cards, setCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20); // tiempo inicial en segundos

  useEffect(() => {
    // Iniciar el contador de tiempo cuando el componente se monta
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, []);

  const toggleCard = (id) => {
    setCards(cards =>
      cards.map(card => 
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const matchCheck = (id) => {
    // Lógica para verificar si dos cartas son iguales
    const flippedCards = cards.filter(card => card.isFlipped && !card.isMatched);
    if (flippedCards.length === 2) {
      const match = flippedCards[0].name === flippedCards[1].name;
      setCards(cards =>
        cards.map(card =>
          flippedCards.map(fc => fc.id).includes(card.id) ? { ...card, isMatched: match } : card
        )
      );
    }
  };

  // El valor que pasas al Provider debe incluir tanto el estado como las funciones para modificarlo
  const value = {
    user,
    setUser,
    theme,
    setTheme,
    cards,
    setCards,
    toggleCard,
    matchCheck,
    timeLeft,
    setTimeLeft
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}