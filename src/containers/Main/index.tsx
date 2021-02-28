import { ChallengeBox } from 'components/ChallengeBox'
import { CompletedChallenges } from 'components/CompletedChallenges'
import { CountDownProvider } from 'contexts/CountDownContext'
import { CountDown } from 'components/CountDown'
import { ExperienceBar } from 'components/ExperienceBar'
import { Profile } from 'components/Profile'
import Head from 'next/head'
import * as S from './styles'

export function Main() {
  return (
    <S.Container>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar></ExperienceBar>
      <section>
        <CountDownProvider>
          <div>
            <Profile></Profile>
            <CompletedChallenges></CompletedChallenges>
            <CountDown></CountDown>
          </div>
          <div>
            <ChallengeBox></ChallengeBox>
          </div>
        </CountDownProvider>
      </section>
    </S.Container>
  )
}
