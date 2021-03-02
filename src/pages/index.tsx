
import {LogIn} from 'containers/LogIn'
import { Session } from 'next-auth'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import  Router  from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'



interface LoginProps{
  session:   Session | null
}



export default function Home() {
  const [session, loading] = useSession()


  useEffect(() => {
    if (session) {
      Router.push('/challenges')
    }
  }, [session])


  return (
    <>
    <Head>
    <title>Faça o login | move.it</title>
  </Head>
  {loading && (
    <div>
    </div>
  )}
  {!loading && <LogIn />}
 </>

  )
}


export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const session = await getSession({ req });

  return {
    props: {session}
  };
}


