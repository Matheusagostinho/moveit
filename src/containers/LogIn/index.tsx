
import { getSession, signIn } from 'next-auth/client'

import * as S from './styles'







export function LogIn() {


  return (
    <S.Container>
     <div>
        <header>
          <img src="/images/Logo.svg" alt="" />
        </header>

        <main>
          <strong>Seja Bem-vindo</strong>
          <p>Faça login para continuar</p>
        </main>

        <div>
        <button onClick={() => signIn('github') }>
            <img src="/icons/Github.svg" alt="github logo" />
            SignIn with GitHub
          </button>

        </div>
      </div>
    </S.Container>
  )
}

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx;
  const session = await getSession({ req });

  if (session) {
    res.writeHead(302, {
      Location: "/challenges",
    });

    res.end();
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
};

