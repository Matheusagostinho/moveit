
import { signIn } from 'next-auth/client'

import * as S from './styles'


export function LogInBG() {


  return (
    <S.Container>
     <div>
        <header className="pageFadeIn">
          <img src="/images/Logo.svg" alt="" />
        </header>
      </div>
    </S.Container>
  )
}

