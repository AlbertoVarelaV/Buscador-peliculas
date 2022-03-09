import React from 'react';

type Props = {
  formValue: {
    search: string
  }
  handleInputChange: () => void
  setCurrentPage: () => void
};

export function Search({ formValue, handleInputChange, setCurrentPage }: Props) {
  const handleChange = (e) => {
    handleInputChange(e);
    setCurrentPage(1);
  };

  return (
    <div className="form-group">
      <input
        autoComplete="off"
        className="form-control"
        name="search"
        onChange={handleChange}
        placeholder="Tu búsqueda"
        type="search"
        value={formValue.search}
      />
    </div>
  );
}

export default Search;
