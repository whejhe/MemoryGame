import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, ImageBackground } from 'react-native';
import Board from './components/Board';
import Header from './components/Header';
import Menu from './components/Menu';
import { shuffleCards } from './utils/shuffleCards';

const App = () => {
  const [cards, setCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const initialCards = shuffleCards(['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'black']);
    setCards(initialCards);
    setAttempts(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  const handleCardPress = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);

      if (flippedCards.length === 1) {
        const firstCard = cards[flippedCards[0]];
        const secondCard = cards[index];
        setAttempts((prev) => prev + 1);

        if (firstCard === secondCard) {
          setMatchedCards((prev) => [...prev, firstCard]);
          resetFlippedCards();
        } else {
          setTimeout(() => resetFlippedCards(), 1000);
        }
      }
    }
  };

  const resetFlippedCards = () => {
    setFlippedCards([]);
  };

  const isGameOver = matchedCards.length === cards.length / 2;

  return (
    <ImageBackground source={require('./assets/puzzle.jpg')} style={styles.container}>
      <Header attempts={attempts} />
      <Board
        cards={cards}
        flippedCards={flippedCards}
        matchedCards={matchedCards}
        onCardPress={handleCardPress}
      />
      <Menu onRestart={startGame} />
      {isGameOver && Alert.alert('¡Juego terminado!', `Intentos: ${attempts}`, [{ text: 'Reiniciar', onPress: startGame }])}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
