import styled, { css } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  main {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 24px;
  }
`;

export const Search = styled.input`
  ${({ theme }) => css`
    padding: 16px;
    width: 100%;
    max-width: 600px;
    background: ${theme.colors.background.primary};
    border: 1px solid #ccc;
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.background.primary};
    width: 100%;
    max-width: 100px;
  `}
`;