import type { NumericRange } from "~/shared/types";

export type CardSize = NumericRange<3, 12>;

export interface ICard {
  id: string;
  title: string;
  description: string;
  size: CardSize;
}
