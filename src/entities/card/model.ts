import { createEvent, createStore } from "effector";
import { ICard } from "./types";
import { v4 as uuid } from 'uuid';
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { persist } from "effector-storage/local";

export const $cards = createStore<ICard[]>([]);
persist({ key: `@cards-test/cards`, store: $cards });

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

export const moveCards = createEvent<DragEndEvent>('move cards');
$cards.on(moveCards, (items, event) => {
  const { active, over } = event;

  if (active.id === over?.id) return items;

  const oldIndex = items.findIndex((item) => item.id === active.id);
  const newIndex = items.findIndex((item) => item.id === over?.id);

  return arrayMove(items, oldIndex, newIndex);
});
