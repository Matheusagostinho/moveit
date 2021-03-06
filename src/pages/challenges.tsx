import { LogIn } from 'containers/LogIn'
import { LogInBG } from 'containers/LogInBG'
import { Main } from 'containers/Main'
import { ChallengeProvider } from 'contexts/ChallengeContext'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/client'
import Router from 'next/router'
import { useEffect } from 'react'
interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

interface CookiesProps {
  level: string
  currentExperience: string
  challengesCompleted: string
}

export default function Challagens(props: HomeProps) {


  const [session] = useSession()

  if (!session) {
    useEffect(() => {
      setTimeout(() => {
        Router.push('/')
      })
    }, [])
    return(
      <LogInBG/>
    )
  }

  if (session) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
    <Main></Main>
    </ChallengeProvider>
  )
}
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = req.cookies as CookiesProps


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),


    }
  }

}
