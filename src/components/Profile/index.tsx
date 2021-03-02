import { ChallengeContext } from 'contexts/ChallengeContext'
import { UserContext } from 'contexts/UserContext'
import { useContext, useEffect, useState } from 'react'
import {getSession, useSession} from 'next-auth/client'
import * as S from './styles'

export function Profile() {
  const { level } = useContext(ChallengeContext)


  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const session = getSession();
  useEffect(() => {
    (async () => {
      let { user } = await session;

      setUserName(user.name);
      setUserImage(user.image);
    })();
  }, [session]);
  return (
    <S.Container>
      <img
        src={userImage}
        alt={userName}
      />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="/icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
