import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d5da;

  font-weight: 500;

  span:first-child {
    font-size: 1.5rem;
    @media (max-width: 720px) {
      font-size: 2rem;
    }
  }

  span:last-child {
    font-size: 2rem;

    @media (max-width: 720px) {
      font-size: 2.25rem;
    }
  }
`
