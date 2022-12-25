import PropTypes from 'prop-types';
import { Input, SearchButton, Icon } from './SearchBox.styled';

import Box from 'components/Box';

const SearchBox = ({ onSubmit }) => {
  return (
    <Box as="form" display="flex" alignItems="center" onSubmit={onSubmit}>
      <Input name="query" autoComplete="off" placeholder="Search movies" />
      <SearchButton type="submit">
        <Icon />
      </SearchButton>
    </Box>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
