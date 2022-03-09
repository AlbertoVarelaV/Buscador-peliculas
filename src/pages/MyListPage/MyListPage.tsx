import React, { useEffect } from 'react';

import { RootState } from '../../config/store/store.ts';
import { startGetVote } from '../../config/actions/myList.ts';

import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

import MovieCard from '../../components/MovieCard/MovieCard.tsx';

export function MyListPage() {
  const dispatch = useAppDispatch();

  const { myList } = useAppSelector((state: RootState) => state.myList);

  useEffect(() => {
    dispatch(startGetVote());
  }, [dispatch]);

  return (
    <div className="search">
      <div className="row my-64">
        {myList
          && myList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              releaseDate={movie.releaseDate}
              overview={movie.overview}
            />
          ))}
      </div>
    </div>
  );
}

export default MyListPage;
