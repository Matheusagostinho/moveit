import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  /* box-shadow: 0 0 60px rgba(0, 0, 0, 0.05); */
  padding: 1.5rem 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 720px) {
    margin-top: 3.5rem;
  }
  ${({ theme }) => css`
    background: ${theme.colors.blackLight};
  `}
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 1.5rem;
    @media (max-width: 720px) {
      max-width: 50%;
    }
  }

  p img {
    margin-bottom: 0.5rem;
    @media (max-width: 720px) {
      width: 48px;
    }
  }
`

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    header {
      color: ${theme.colors.blue};
      font-weight: 600;
      font-size: ${theme.font.sizes.xlarge};
      padding: 0 2rem 2.5rem;
      border-bottom: 1px solid ${theme.colors.lightGray};
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      strong {
        font-size: ${theme.font.sizes.xxlarge};

        font-weight: 600;
      }
      p {
        line-height: 1.5;
        color: ${theme.colors.gray};
      }
    }
    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      button {
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 0;
        font-weight: 600;
        transition: filter 0.2s;
        color: ${theme.colors.white};
        :hover {
          filter: brightness(0.9);
        }
      }
    }
  `}
`
export const ButtonFailed = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.red};
  `}
`
export const ButtonSucceeded = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.green};
  `}
`
