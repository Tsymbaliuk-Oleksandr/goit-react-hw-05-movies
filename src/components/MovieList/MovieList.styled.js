import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListEl = styled.li`
  margin-bottom: 8px;
`;

export const Navlink = styled(NavLink)`
  color: darkblue;
  text-decoration: none;
  :hover {
    color: purple;
    text-decoration: underline;
  }
`;
