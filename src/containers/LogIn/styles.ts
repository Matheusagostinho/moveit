import { shade } from 'polished'
import styled from 'styled-components'


export const Container = styled.div`
  background: ${({ theme }) => theme.colors.blue} no-repeat;
  background-position: center left;
  background-image: url('/images/bg-logo.svg');
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 720px) {
    align-items: center;

    }
  header{
    display:flex;
    align-items:center;
    margin-top:-5rem;

    @media (max-width: 720px) {
      margin-top:-10rem;
      padding-left:15px;
      padding-right:15px;
    }
    >img{
      flex:1;
      @media (max-width: 720px) {
      width:80%;
    }
    }
  }

  > div {
    height: 26.4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 720px) {
      margin-right: 12.5rem;
    }
    @media (max-width: 720px) {


    }
    > main{
      text-align:center;
    }
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 16px;
        font-weight: 600;
        transition: background-color 0.2s;
        width:100%;
        @media (max-width: 720px) {
          width:95%;

    }
        background-image: linear-gradient(
          to right,
          rgba(73, 83, 184),
          rgba(73, 83, 184, 0.83)
        );
        color: white;
        border: none;
        &:hover {
        background: ${shade(0.2, '#4953b8')};
          }
          :first-child{
            margin-bottom:16px;
          }
      }


    }
  }
  main {
    color: ${({ theme }) => theme.colors.white};
    strong {
      font-weight: 600;
      font-size: 2.25rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`

