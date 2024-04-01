import React from "react";
import cls from './card-list.module.sass';
import { Card } from "~/entities/card/ui";
import { useUnit } from "effector-react";
import { $cards } from "~/entities/card";
import { EditCard } from "~/features/edit-card";
import { DeleteCard } from "~/features/delete-card";

export const CardList: React.FC = () => {
  const cards = useUnit($cards);
  
  return (
    <div className={cls.list}>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          size={12} 
        >
          <div className={cls.card__actions}>
            <EditCard id={card.id} />
            <DeleteCard id={card.id} />
          </div>
        </Card>
      ))}
    </div>
  );
};
