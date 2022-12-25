import Box from 'components/Box';
import { List, Navlink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Box as="nav">
      <List>
        <li>
          <Navlink to="/">Home</Navlink>
        </li>
        <li>
          <Navlink to="/movies">Movies</Navlink>
        </li>
      </List>
    </Box>
  );
};

export default Navigation;
