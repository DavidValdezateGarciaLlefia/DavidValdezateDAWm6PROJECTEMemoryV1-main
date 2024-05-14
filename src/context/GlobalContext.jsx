import React, { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase/supabase";

export const GlobalContext = createContext();




export function GlobalContextProvider({ children }) {

  async function inicio(){
    try {
      const {data: {user}} = await supabase.auth.getUser()
      if(user){
        setUsuario({
          email: user.email,
          password: ''
        })
      }
    }catch(error){
      console.log('Error en login',error)
    }
  }

  inicio()
  const [usuario, setUsuario] = useState({
    email: '',
    password: '',
  })
  
  


  const [theme, setTheme] = useState('light');
  const [cards, setCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      
    }, 1000);

    
   
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

  const value = {
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
    <GlobalContext.Provider value={{value,
    usuario, setUsuario
    }}>
      {children}
    </GlobalContext.Provider>
  );
}