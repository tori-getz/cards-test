import React, { PropsWithChildren } from "react";
import type { NumericRange } from "~/shared/types";
import cls from './card.module.sass';

export type CardSize = NumericRange<3, 12>;

interface ICardProps extends PropsWithChildren {
  title: string;
  description: string;
  size: CardSize;
}

export const Card: React.FC<ICardProps> = ({
  title,
  description,
  children,
  size,
}) => {
  return (
    <div
      className={cls.card}
      style={{ gridColumn: `span ${size}` }}
    >
      <h1 className={cls.card__title}>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
};
