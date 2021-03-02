
import {LogIn} from 'containers/LogIn'
import { Session } from 'next-auth'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import  Router  from 'next/router'
import { useEffect } from 'react'



interface LoginProps{
  session:   Session | null
}



export default function Home() {
  const [session, loading] = useSession()

  // if (typeof window !== 'undefined' && loading) return null

  useEffect(() => {
    if (session) {
      Router.push('/challenges')
    }
  }, [session])


  return (
  <>
    {session && (
      <div>
        <h1>Carrregando...</h1>
      </div>
    )}
    {!session && <LogIn />}
  </>


  )
}


export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session = await getSession({ req });

  return {
    props: {session}
  };
}


