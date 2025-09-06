import { useState } from 'react';

const KEY_FAVORITES = 'favorites';

const useLocalFavorite = (id: number | string) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = localStorage.getItem(KEY_FAVORITES);
    if (favorites) {
      const favArray = JSON.parse(favorites) as (number | string)[];
      return favArray.includes(id);
    }
    return false;
  });

  const toggleFavorite = () => {
    const favorites = localStorage.getItem(KEY_FAVORITES);
    let favArray: (number | string)[] = [];
    if (favorites) {
      favArray = JSON.parse(favorites) as (number | string)[];
    }
    if (isFavorite) {
      favArray = favArray.filter(favId => favId !== id);
    } else {
      favArray.push(id);
    }
    localStorage.setItem(KEY_FAVORITES, JSON.stringify(favArray));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};

export default useLocalFavorite;
