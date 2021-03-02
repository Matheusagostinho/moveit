import styled from 'styled-components'

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 720px) {
    height: 100vh;
  }

  @media (max-width: 720px) {
    padding-bottom: 5rem;
  }

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }



  }
    > button{
    flex: 1;
    background:transparent;
    width:100%;
    max-width:100px;
    color:#8F8F8F;
    font-size:1.5rem;
    border:0;
    transition: color 0.2s ease 0s;
    @media (max-width: 720px) {
      margin-top: 7rem;
    :hover{
      color:#fafafa;
    }

  }


  }


  @media (max-width: 720px) {
    section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
      justify-content: center;
    }
  }
`
