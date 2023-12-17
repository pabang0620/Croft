import { memo, useCallback, useState } from 'react';
import update from 'immutability-helper';
import { Card } from './Card';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const ITEMS = [
  { id: 1, text: 'Card 1', width: 50, height: 50 },
  { id: 2, text: 'Card 2', width: 50, height: 50 },
  { id: 3, text: 'Card 3', width: 100, height: 100 },
  { id: 4, text: 'Card 4', width: 100, height: 100 },
  { id: 5, text: 'Card 5', width: 50, height: 100 },
  { id: 6, text: 'Card 6', width: 50, height: 100 },
  { id: 7, text: 'Card 7', width: 100, height: 50 },
  { id: 8, text: 'Card 8', width: 100, height: 50 },
];

//드래그 앤 드랍을 위한 임시 파일
export const Container = memo(function Container() {
  const [cards, setCards] = useState(ITEMS);

  const findCard = useCallback(
    (id) => {
      const card = cards.filter((item) => `${item.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );

  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );

  return (
    <div style={style}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={`${card.id}`}
          text={card.text}
          width={card.width}
          height={card.height}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  );
});