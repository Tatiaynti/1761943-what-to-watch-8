import { useDispatch } from 'react-redux';
import { changeFavoriteKeyStatus } from '../../store/api-actions';
import { Film } from '../../types/film';

enum FavoriteStatus {
  isFavorite = 1,
  notFavorite = 0,
}

type AddToMyListButtonType = {
  film: Film,
}

const notInListButton = (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"></use>
  </svg>
);

const inListButton = (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"></use>
  </svg>
);

function AddToMyListButton({film}: AddToMyListButtonType): JSX.Element {
  const dispatch = useDispatch();

  const {isFavorite, id} = film;

  const changeStatus = () => {
    const status = isFavorite ? FavoriteStatus.notFavorite : FavoriteStatus.isFavorite;
    dispatch(changeFavoriteKeyStatus(id, status));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={changeStatus}>
      {isFavorite ? inListButton : notInListButton}
      <span>My list</span>
    </button>
  );
}

export default AddToMyListButton;
