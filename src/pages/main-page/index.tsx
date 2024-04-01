import React from "react";
import { AddCard } from "~/features/add-card";
import { CardList } from "~/widgets/card-list";
import cls from './main-page.module.sass';

export const MainPage: React.FC = () => {
  return (
    <div className={cls.page}>
      <AddCard />
      <CardList />
    </div>
  );
};
