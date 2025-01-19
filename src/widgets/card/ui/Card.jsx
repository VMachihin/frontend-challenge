import { useDispatch } from 'react-redux';
import './card.css';
import { toggleFavoritesCat } from '../../../features/cats/catsSlice';

export const Card = ({ cat }) => {
  const dispatch = useDispatch();

  const handleAddFavoritesCat = (cat) => {
    dispatch(toggleFavoritesCat(cat));
  };

  return (
    <li className="card__item" onClick={() => handleAddFavoritesCat(cat)}>
      <img
        src={cat.url}
        alt="картинка котика"
        className="card__image"
        width={225}
        height={225}
        loading="lazy"
      />

      <button
        type="submit"
        className={`card__like-btn ${cat.isLiked && 'isLiked'}`}
      ></button>
    </li>
  );
};
