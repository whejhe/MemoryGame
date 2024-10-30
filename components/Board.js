import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Card from './Card';

const Board = ({ cards, flippedCards, matchedCards, onCardPress }) => {
    return (
        <View style={styles.board}>
            {cards.map((color, index) => (
                <Card
                    key={index}
                    color={color}
                    isFlipped={flippedCards.includes(index) || matchedCards.includes(color)}
                    onPress={() => onCardPress(index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '80%',
    },
});

export default Board;
