import { Main } from 'containers/Main'
import { ChallengeProvider } from 'contexts/ChallengeContext'
import { GetServerSideProps } from 'next'

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

export default function Home(props: HomeProps) {
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = req.cookies as CookiesProps
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
