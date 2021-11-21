import {useState} from 'react';

type ActivityCardType = (id: string) => void;

const useActiveFilmCard = (): [ActivityCardType] => {
  const [, setFilmCardActive] = useState<string>();
  const toggleActiveCardById = (id: string) => {
    setFilmCardActive(id);
  };
  return [toggleActiveCardById];
};

export {useActiveFilmCard};
