import { ChallengeContext } from 'contexts/ChallengeContext'
import { useContext } from 'react'
import * as S from './styles'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  )

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  )
  return (
    <S.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span> {experienceToNextLevel} xp</span>
    </S.Container>
  )
}
