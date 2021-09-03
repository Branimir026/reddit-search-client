import { useState } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";

import reddit from "../redditapi";

function SearchFormLogic() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);

    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const check = document.querySelector('input[type="radio"]:checked').value;

    const results = await reddit.search(searchInput, check);
    setSearchData(results);

    setSearchInput("");
  };

  return (
    <>
      <SearchForm
        input={searchInput}
        inputHandler={searchInputHandler}
        submitHandler={handleSubmit}
      />
      {searchData && <Results searchData={searchData} />}
    </>
  );
}

export default SearchFormLogic;
