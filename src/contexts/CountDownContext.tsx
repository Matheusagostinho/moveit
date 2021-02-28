import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ChallengeContext } from './ChallengeContext'

interface CountDownProviderProps {
  children: ReactNode
}
interface CountDownContextData {
  minutes: number
  segunds: number
  startCountDown: () => void
  resetCountDown: () => void
  hasFinished: boolean
  isActive: boolean
}

export const CountDownContext = createContext({} as CountDownContextData)

let countDownTimeout: NodeJS.Timeout

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenge } = useContext(ChallengeContext)
  const [time, setTime] = useState(0.5 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const segunds = time % 60

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout)
    setIsActive(false)
    setTime(0.5 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        segunds,
        startCountDown,
        resetCountDown,
        hasFinished,
        isActive
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}
