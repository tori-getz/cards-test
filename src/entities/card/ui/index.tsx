import React, { CSSProperties, PropsWithChildren } from "react";
import type { NumericRange } from "~/shared/types";
import cls from './card.module.sass';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

export type CardSize = NumericRange<3, 12>;

interface ICardProps extends PropsWithChildren {
  id: string;
  title: string;
  description: string;
  size: CardSize;
}

export const Card: React.FC<ICardProps> = ({
  id,
  title,
  description,
  children,
  size,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    gridColumn: `span ${size}`
  };

  return (
    <div
      ref={setNodeRef}
      className={cls.container}
      {...attributes}
      {...listeners}
    >
      <div className={cls.card} style={style}>
        <h1 className={cls.card__title}>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
};
