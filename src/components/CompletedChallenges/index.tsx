import { ChallengeContext } from 'contexts/ChallengeContext'
import { useContext } from 'react'
import * as S from './styles'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext)
  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  )
}
