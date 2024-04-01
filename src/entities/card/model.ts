import { createEvent, createStore } from "effector";
import { ICard } from "./types";
import { v4 as uuid } from 'uuid';

export const $cards = createStore<ICard[]>([]);

export const addCard = createEvent<Omit<ICard, 'id'>>('add card');
$cards.on(addCard, (prev, card) => [...prev, { id: uuid(), ...card }]);

export const deleteCard = createEvent<string>('delete card');
$cards.on(deleteCard, (prev, id) => {
  return [...prev].filter((card) => card.id !== id);
});

export const updateCard = createEvent<ICard>('update card');
$cards.on(updateCard, (prev, updated) => {
  return [...prev].map((card) => {
    if (card.id !== updated.id) {
      return card;
    }

    return updated;
  });
});
