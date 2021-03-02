import { Main } from 'containers/Main'
import { ChallengeProvider } from 'contexts/ChallengeContext'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = req.cookies as CookiesProps


  const session = await getSession({ req });

  if (!session) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return {
      props: {},
    };
  }


  return {
    props: {
      level: Number(level),
      currentExperience: Number(level),
      challengesCompleted: Number(level),


    }
  }

}
