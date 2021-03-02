import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#f2b30c')};
  }
`
