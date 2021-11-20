import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFavoriteStatus } from '../../store/api-actions';
import { Film } from '../../types/film';

enum FavoriteStatus {
  isFavorite = 1,
  notFavorite = 0,
}

type AddToMyListButtonType = {
  film: Film,
}

function AddToMyListButton({film}: AddToMyListButtonType): JSX.Element {
  const dispatch = useDispatch();
  const {isFavorite, id} = film;
  const [isActive, setIsActive] = useState<boolean>(isFavorite);

  const handleStatusChange = () => {
    const status = isActive ? FavoriteStatus.notFavorite : FavoriteStatus.isFavorite;
    dispatch(changeFavoriteStatus(id, status));
    if (!isActive) {
      setIsActive(true);
    }
    else {
      setIsActive(false);
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleStatusChange}>
      {isActive ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
    </button>
  );
}

export default AddToMyListButton;
