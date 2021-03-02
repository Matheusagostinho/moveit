import { ChallengeContext } from 'contexts/ChallengeContext'
import { UserContext } from 'contexts/UserContext'
import { useContext } from 'react'
import {useSession} from 'next-auth/client'
import * as S from './styles'

export function Profile() {
  const { level } = useContext(ChallengeContext)
  const [session] = useSession()
  return (
    <S.Container>
      <img
        src={`${session?.user.image}`}
        alt={`${session?.user.name}`}
      />
      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="/icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
