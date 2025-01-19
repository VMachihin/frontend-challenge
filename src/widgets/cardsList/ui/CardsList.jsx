import React from 'react';
import { useLocation } from 'react-router';

import { Card } from '../../card/ui/Card';
import { useCats } from '../api/use-cats';

import { Loader } from '../../../shared/ui/Loader';

import './cardList.css';

export const CardsList = () => {
  const location = useLocation().pathname;
  const [cats, catsFavorites] = useCats();

  return (
    <>
      {cats.err ? 'При загрузке данных произошла ошибка' : null}

      {cats.status === 'loading' ? <Loader /> : null}

      <ul className="card__list">
        {location === '/'
          ? cats?.map((cat) => <Card key={cat.id} cat={cat} />)
          : null}

        {location === '/favorites'
          ? catsFavorites?.map((cat) => <Card key={cat.id} cat={cat} />)
          : null}
      </ul>
    </>
  );
};
