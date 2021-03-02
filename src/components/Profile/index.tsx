import { ChallengeContext } from 'contexts/ChallengeContext'
import { useContext, useEffect, useState } from 'react'
import {useSession} from 'next-auth/client'
import * as S from './styles'

export function Profile() {
  const { level } = useContext(ChallengeContext)


  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const [session] = useSession();


  return (
    <S.Container>
     <img src={`${session?.user.image}`} alt="github avatar" />
      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
