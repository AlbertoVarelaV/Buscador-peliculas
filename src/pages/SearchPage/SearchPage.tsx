import React from 'react';

import MovieCard from '../../components/MovieCard/MovieCard.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import Search from '../../components/Search/Search.tsx';

export function SearchPage() {
  return (
    <div>
      <Search />
      <MovieCard />
      <Pagination />
    </div>
  );
}

export default SearchPage;
