import React from 'react';

type Props = {
  formValue: {
    search: string
  }
  handleInputChange: () => void
};

export function Search({ formValue, handleInputChange }: Props) {
  return (
    <div className="form-group">
      <input
        autoComplete="off"
        className="form-control"
        name="search"
        onChange={handleInputChange}
        placeholder="Tu búsqueda"
        type="search"
        value={formValue.search}
      />
    </div>
  );
}

export default Search;
