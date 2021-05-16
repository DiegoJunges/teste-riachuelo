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
    margin: 0 auto;
  `}
`;

export const Image = styled.img`
  height: 100%;
  max-height: 240px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 180px;
  border-radius: 16px;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Main = styled.div`
  ${({ theme }) => css`
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 24px;

    a {
      text-decoration: none;
      color: ${theme.colors.text.primary};
      margin: 24px;
    }
    span, p {
      margin-top: 24px;
    }
    color: ${theme.colors.text.primary};

    } ;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 160px;
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
