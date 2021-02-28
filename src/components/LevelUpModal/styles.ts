import styled, { css } from 'styled-components'
interface TitleProps {
  readonly isActive: number
}
export const OverLay = styled.div<TitleProps>`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isActive }) => css`
    opacity: ${isActive};
    transition: opacity 0.4s ease-in;
  `}
`

export const Container = styled.div<TitleProps>`
  ${({ theme, isActive }) => css`
    background: ${theme.colors.blackLight};
    width: 100%;
    height: 100%;
    max-height: 300px;
    max-width: 400px;
    padding: 2rem 2rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    position: relative;
    opacity: ${isActive};
    transition: opacity 0.4s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    header {
      width: 50%;
      height: 50%;
      font-size: 8.25rem;
      font-weight: 600;
      color: ${theme.colors.blue};
      background: url('/icons/levelup.svg') no-repeat center;
      background-size: 100%;

      @media (max-width: 720px) {
        font-size: 12.25rem;
      }
    }

    strong {
      font-size: 2.5rem;

      @media (max-width: 720px) {
        font-size: 3.5rem;
      }
    }

    p {
      font-size: 1.25rem;
      color: ${theme.colors.gray};
      margin-top: 0.25rem;

      @media (max-width: 720px) {
        font-size: 2.25rem;
      }
    }

    button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: transparent;
      border: 0;
      font-size: 0px;
    }
  `}
`
