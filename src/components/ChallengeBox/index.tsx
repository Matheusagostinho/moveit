import { ChallengeContext } from 'contexts/ChallengeContext'
import { CountDownContext } from 'contexts/CountDownContext'
import { useContext } from 'react'

import * as S from './styles'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengeContext
  )

  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSucceeded() {
    completedChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }
  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header> Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <S.ButtonFailed type="button" onClick={handleChallengeFailed}>
              Falhei
            </S.ButtonFailed>
            <S.ButtonSucceeded type="button" onClick={handleChallengeSucceeded}>
              Completei
            </S.ButtonSucceeded>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios!
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  )
}
