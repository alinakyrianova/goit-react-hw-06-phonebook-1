import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.appBg};
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  display: block;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textPrimary}; 
`;

export const SearchWrapper = styled.div`
  margin-right: auto;
`;

export const StyledTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
`;

export const CloseBtn = styled(FiX)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 21px;
  height: 21px;
  color: ${({ theme }) =>theme.colors.textPrimary};
  cursor: pointer;
  transition: transform 250ms ease-in-out, color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transform: scale(1.1);
  }
`;

export const OpenPhonebook = styled.button`
  display: inline-block;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.buttonBg}; 
  color: ${({ theme }) => theme.colors.white}; 
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  padding: 1em 2em;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
  top: 50px;
  left: 150px;

  &:focus {
    outline: 0;
  }

  &:active {
    transform: scale(0.9);
    background-color: ${({ theme }) => theme.colors.buttonBg};
box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
  }
`;