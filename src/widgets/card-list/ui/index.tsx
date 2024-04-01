import React from "react";
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import cls from './card-list.module.sass';
import { Card } from "~/entities/card/ui";
import { useUnit } from "effector-react";
import { $cards, moveCards } from "~/entities/card";
import { EditCard } from "~/features/edit-card";
import { DeleteCard } from "~/features/delete-card";

export const CardList: React.FC = () => {
  const cards = useUnit($cards);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onDragEnd = (event: DragEndEvent) => {
    moveCards(event);
  };
  
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={cards}
        strategy={verticalListSortingStrategy}
      >
        <div className={cls.list}>
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              size={card.size} 
            >
              <div className={cls.card__actions}>
                <EditCard id={card.id} />
                <DeleteCard id={card.id} />
              </div>
            </Card>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
