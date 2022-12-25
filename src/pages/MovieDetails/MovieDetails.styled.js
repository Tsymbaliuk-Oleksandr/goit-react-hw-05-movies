import styled from 'styled-components';
import { ImArrowLeft2 } from 'react-icons/im';

export const Poster = styled.img`
  margin-left: 30px;
  border-radius: 10px;
`;

export const BackButton = styled.button`
  position: relative;
  background-color: #fff;
  margin-left: 10px;
  margin-bottom: 10px;
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

export const ButtonText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: rgba(80, 80, 80, 0.5);
  padding: 10px 0 10px 25px;
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    opacity: 1;
  }
`;

export const Icon = styled(ImArrowLeft2)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
`;
