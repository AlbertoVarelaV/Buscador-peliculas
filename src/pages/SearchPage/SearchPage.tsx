import React, { useEffect } from 'react';

import { RootState } from '../../config/store/store.ts';
import { startSearchMovies } from '../../config/actions/movies.ts';

import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useForm } from '../../hooks/useForm.ts';

import MovieCard from '../../components/MovieCard/MovieCard.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import Search from '../../components/Search/Search.tsx';

export function SearchPage() {
  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state: RootState) => state.movies);

  const [formValue, handleInputChange] = useForm({
    search: '',
  });

  useEffect(() => {
    dispatch(startSearchMovies(formValue.search, 1));
  }, [dispatch, formValue]);

  return (
    <div className="search">
      <Search
        formValue={formValue}
        handleInputChange={handleInputChange}
      />
      <div className="row my-64">
        {movies.results
          && movies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              overview={movie.overview}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default SearchPage;
