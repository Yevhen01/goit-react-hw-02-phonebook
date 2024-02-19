import PropTypes from "prop-types";

import {
  SearchInputBox,
  SearchLabel,
  SearchWrapper,
} from "./SearchContact.styled";

export const SearchContact = ({ handleFilter }) => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="">Find contacts by name</SearchLabel>
      <SearchInputBox
        name="filter"
        onChange={handleFilter}
        type="text"
        placeholder="Сontact search..."
      />
    </SearchWrapper>
  );
};

SearchContact.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
