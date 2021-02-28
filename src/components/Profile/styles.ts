import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50px;
  }
  div {
    margin: 1.5rem;
  }
  ${({ theme }) => css`
    div strong {
      font-size: ${theme.font.sizes.medium};
      font-weight: 600;
    }
    div p {
      font-size: ${theme.font.sizes.small};
      margin-top: 0.5rem;
      color: ${theme.colors.gray};
    }
    div p img {
      margin-right: 0.5rem;
      width: 1rem;
    }
  `}
  @media (max-width: 720px) {
    display: flex;

    align-items: center;

    > img {
      width: 9.5rem;
      height: 9.5rem;
      border-radius: 50px;
    }
    ${({ theme }) => css`
      > div strong {
        font-size: ${theme.font.sizes.xlarge};
        font-weight: 600;
        margin-top: 0.8rem;
      }
      div p {
        font-size: ${theme.font.sizes.medium};
        margin-top: 0.5rem;
        color: ${theme.colors.gray};
      }
      div p img {
        margin-right: 0.5rem;
        width: 1rem;
      }
    `}
  }
`
