import styled, { css } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 0 24px;
  main {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 48px;
  }
`;

export const Search = styled.input`
  ${({ theme }) => css`
    padding: 16px;
    width: 100%;
    max-width: 840px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    background: ${theme.colors.background.primary};
    border: 1px solid #ccc;
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    border: 1px solid #cccccc30;
    cursor: pointer;
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.background.primary};
    width: 100%;
    max-width: 100px;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 0.7;
    }
  `}
`;

export const CardsGroup = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    display: flex;
    gap: 24px;
    p {
      color: ${theme.colors.text.primary};
    }
  `}
`;

export const NextPage = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 240px;
    padding: 16px;
    background: ${theme.colors.background.secondary};
    color: ${theme.colors.text.primary};
    border: 1px solid #ccc;
    border-radius: 16px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    svg {
      font-size: 24px;
    }
    margin: 24px 0px;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
    &:hover {
      opacity: 0.7;
    }
  `}
`;
