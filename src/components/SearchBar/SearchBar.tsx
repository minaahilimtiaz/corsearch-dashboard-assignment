import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSubmit: (value: string) => void;
  searchBarStyle?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSubmit,
  searchBarStyle,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const updateSearchInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInput(event.target.value);
    onSubmit(event.target.value.toString());
  };

  return (
    <input
      type="search"
      value={searchInput}
      onChange={updateSearchInputValue}
      placeholder={placeholder}
      className={`${searchBarStyle}`}
    />
  );
};

export default SearchBar;
