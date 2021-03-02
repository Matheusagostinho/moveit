
import { signIn } from 'next-auth/client'

import * as S from './styles'

import Button from 'components/Button'






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
        <button onClick={() => signIn('github', {callbackUrl: 'https://moveit-matheusagostinho.vercel.app/challenges'}) }>
            <img src="/icons/Github.svg" alt="github logo" />
            SignIn with GitHub
          </button>
        </div>
      </div>
    </S.Container>
  )
}

