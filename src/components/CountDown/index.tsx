import { CountDownContext } from 'contexts/CountDownContext'
import { useContext } from 'react'
import * as S from './styles'

export function CountDown() {
  const {
    minutes,
    segunds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useContext(CountDownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(segunds).padStart(2, '0').split('')

  return (
    <>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </S.Container>
      {hasFinished ? (
        <S.Button disabled>Ciclo Encerrado</S.Button>
      ) : (
        <>
          {isActive ? (
            <S.ButtonActive type="button" onClick={resetCountDown}>
              Abandonar ciclo
            </S.ButtonActive>
          ) : (
            <S.Button type="button" onClick={startCountDown}>
              Iniciar um ciclo
            </S.Button>
          )}
        </>
      )}
    </>
  )
}
