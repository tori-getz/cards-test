import React, { CSSProperties, PropsWithChildren } from "react";
import cls from './card.module.sass';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { CardSize } from "../types";
import { MdDragHandle, MdMenu } from "react-icons/md";

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
    >
      <div className={cls.card} style={style}>
        <div
          className={cls.card__handle}
          {...attributes}
          {...listeners}
        >
          <MdMenu />
        </div>
        <div className={cls.card__body}>
          <h1 className={cls.card__title}>{title}</h1>
          <p>{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};
