import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCats } from '../../../features/cats/catsSlice';
import { selectCats } from '../../../features/cats/catsSelectors';

export const useCats = () => {
  const dispatch = useDispatch();
  const { allCatsList, favoritesCats } = useSelector(selectCats);

  localStorage.setItem('catsList', JSON.stringify(allCatsList));
  localStorage.setItem('catsFavoritesList', JSON.stringify(favoritesCats));

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('catsList')).length) {
      dispatch(loadCats());
    }
  }, []);

  const cats = JSON.parse(localStorage.getItem('catsList'));
  const catsFavorites = JSON.parse(localStorage.getItem('catsFavoritesList'));
  return [cats, catsFavorites];
};
