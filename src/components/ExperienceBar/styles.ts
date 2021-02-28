import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    margin-bottom: 4.5rem;
  }

  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.small};
    }

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${theme.colors.gray};
      margin: 0 1.5rem;
      position: relative;

      span {
        position: absolute;
        top: 10px;
        transform: translateX(-50%);
        transition: left 0.4s linear;

        @media (max-width: 720px) {
          width: 5rem;
        }
      }
    }

    > div > div {
      height: 4px;
      border-radius: 4px;
      background: ${theme.colors.green};

      transition: width 0.4s linear;
    }
  `}
`
