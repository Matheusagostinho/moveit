import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookie from 'js-cookie'

import challenges from '../../challenges.json'
import { LevelUpModal } from 'components/LevelUpModal'

interface ChallengeProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}
interface ChallengeProps {
  type: string
  description: string
  amount: number
}

interface ChallengeContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: ChallengeProps | null
  startNewChallenge: () => void
  levelUp: () => void
  resetChallenge: () => void
  experienceToNextLevel: number
  completedChallenge: () => void
  closeLevelUpModal: () => void
  isLevelUpModalOpen: boolean
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({
  children,
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState<ChallengeProps | null>(
    null
  )
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }
  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false)
  }
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookie.set('level', String(level))
    Cookie.set('currentExperience', String(currentExperience))
    Cookie.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      // new Notification('Novo desafio🎉', {
      //   body: `Valendo ${challenge.amount} xp!`,
      //   data: `Valendo ${challenge.amount} xp!`
      // })
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Novo desafio! 🎉', {
          data: `Valendo ${challenge.amount} xp!`,
          body: `Valendo ${challenge.amount} xp!`
        })
      })
    }
  }
  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completedChallenge,
        closeLevelUpModal,
        isLevelUpModalOpen
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
