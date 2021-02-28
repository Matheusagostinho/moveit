import { ChallengeContext } from 'contexts/ChallengeContext'
import { useContext } from 'react'
import * as S from './styles'

export function Profile() {
  const { level } = useContext(ChallengeContext)
  return (
    <S.Container>
      <img
        src="https://github.com/matheusAgostinho.png"
        alt="Matheus Agostinho"
      />
      <div>
        <strong>Matheus Agostinho</strong>
        <p>
          <img src="/icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
