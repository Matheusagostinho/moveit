import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  > div {
    flex: 1;
    display: flex;
    justify-content: space-evenly;

    ${({ theme }) => css`
      background: ${theme.colors.blackLight};
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      font-size: 8.5rem;
      text-align: center;
    `}
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid #313137;
  }
  > div span:last-child {
    border-left: 1px solid #313137;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 0;
  font-weight: 600;
  transition: background-color 0.2s;

  ${({ theme }) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    :not(:disabled):hover {
      background-color: ${theme.colors.blueDark};
    }
    :disabled {
      background: ${theme.colors.blackLight};
      cursor: not-allowed;
      border-bottom: 1px solid ${theme.colors.green};
    }
  `}
`

export const ButtonActive = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 0;
  font-weight: 600;
  transition: background-color 0.2s;

  ${({ theme }) => css`
    background: ${theme.colors.blackLight};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    :hover {
      background-color: ${theme.colors.red};
    }
  `}
`
