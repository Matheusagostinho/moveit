
import { signIn } from 'next-auth/client'

import * as S from './styles'


export function LogInBG() {


  return (
    <S.Container>
     <div>
        <header className="pageFadeIn">
          <img src="/images/Logo.svg" alt="" />
        </header>

        <main className="pageFadeIn">
          <strong>Seja Bem-vindo</strong>
          <p>Faça login para continuar</p>
        </main>

        <div className="pageFadeIn">
        <button className="pageFadeIn" onClick={() => signIn('github') }>
            {/* <img src="/icons/Github.svg" alt="github logo" /> */}
            SignIn with GitHub
          </button>
          <button className="pageFadeIn" onClick={() => signIn('auth0') }>
            SignIn with Email
          </button>

        </div>
      </div>
    </S.Container>
  )
}

