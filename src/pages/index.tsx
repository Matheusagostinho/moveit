
import {LogIn} from 'containers/LogIn'
import { Session } from 'next-auth'
import { GetServerSideProps } from 'next'
import { useSession, getSession } from 'next-auth/client'
import  Router  from 'next/router'
import { useEffect } from 'react'



interface LoginProps{
  session:   Session | null
}



// if (typeof window !== 'undefined' && loading) return null


export default function Home({session}: LoginProps) {


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


export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession({ req });

  if (session && req) {
    res.writeHead(302, {
      Location: "/challenges",
    });

    res.end();
    return {
      props: {},
    };
  }


};


