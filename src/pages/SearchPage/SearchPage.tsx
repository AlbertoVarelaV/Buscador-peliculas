import React from 'react';

import MovieCard from '../../components/MovieCard/MovieCard.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import Search from '../../components/Search/Search.tsx';

import useForm from '../../hooks/useForm.ts';

export function SearchPage() {
  const [formValue, handleInputChange] = useForm({
    search: '',
  });

  return (
    <div className="search">
      <Search
        formValue={formValue}
        handleInputChange={handleInputChange}
      />
      <div className="row my-64">
        <MovieCard />
      </div>
      <Pagination />
    </div>
  );
}

export default SearchPage;
