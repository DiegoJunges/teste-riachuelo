import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 840px;
    display: flex;
    background-color: ${theme.colors.background.secondary};
    border-radius: 16px;
    box-shadow: 2px 2px 10px #00000070;
    border: 1px solid #cccccc30;
    @media (max-width: 530px) {
      flex-direction: column;
    }
  `}
`;

export const Image = styled.img`
  height: 100%;
  max-height: 240px;
  width: 100%;
  max-width: 180px;
  border-radius: 16px;
  @media (max-width: 530px) {
    margin: 0 auto;
  }
`;

export const Main = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 24px 24px 8px 24px;
    a {
      text-decoration: none;
      color: ${theme.colors.text.primary};
    }
    color: ${theme.colors.text.primary};
    @media (max-width: 530px) {
      h1 {
        font-size: 24px;
      }
      }
    } ;
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    div {
      margin-top: 8px;
      p {
        padding-bottom: 4px;
      }
    }
    div:last-child {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }
    @media (max-width: 530px) {
      div:last-child {
        padding-bottom: 24px;
        display: flex;
      }
    } ;
  `}
`;

type ButtonFavoriteProps = {
  favorite: boolean;
};

export const ButtonFavorite = styled.button<ButtonFavoriteProps>`
  ${({ favorite }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    font-size: 32px;
    background: transparent;
    border: 0;
    color: ${favorite ? '#FA4C58' : '#FFF'};
  `}
`;
