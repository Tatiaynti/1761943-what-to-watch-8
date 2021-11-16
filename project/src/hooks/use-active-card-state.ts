import {useState} from 'react';

const useActiveFilmCard = (): any => {
  const [, setFilmCardActive] = useState<string>();
  function toggleActiveCardById(id: string) {
    setFilmCardActive(id);
  }
  return [toggleActiveCardById];
};

export {useActiveFilmCard};
