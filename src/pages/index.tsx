
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


export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const session = await getSession({ req });

  if (session) {
    res.writeHead(302, {
      Location: "/challanges",
    });
    res.end();
    return {
      props: {session},
    };
  }
}


