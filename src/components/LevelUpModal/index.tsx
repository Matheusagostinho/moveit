import { ChallengeContext } from 'contexts/ChallengeContext'
import { useContext, useEffect, useState } from 'react'
import * as S from './styles'

export function LevelUpModal() {
  const { level, closeLevelUpModal, isLevelUpModalOpen } = useContext(
    ChallengeContext
  )

  const [opacty, setOpacty] = useState(0)

  useEffect(() => {
    if (isLevelUpModalOpen) {
      setTimeout(() => {
        setOpacty(1)
      }, 300)
    }
    setOpacty(0)
  }, [isLevelUpModalOpen])
  return (
    <S.OverLay isActive={opacty}>
      <S.Container isActive={opacty}>
        <header> {level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </S.Container>
    </S.OverLay>
  )
}
