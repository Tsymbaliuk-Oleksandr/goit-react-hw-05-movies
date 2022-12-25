import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const Input = styled.input`
  padding: 8px 20px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const SearchButton = styled.button`
  position: relative;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Icon = styled(ImSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
