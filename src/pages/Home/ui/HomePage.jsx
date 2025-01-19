import React from 'react';
import { CardsList } from '../../../widgets/cardsList/ui/CardsList';

export const HomePage = () => {
  return (
    <>
      <CardsList />
      <span className="loading-text">... загружаем еще котиков ...</span>
    </>
  );
};
