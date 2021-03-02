import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLInputElement>

const Button: React.FC<ButtonProps> = ({ children }, props) => (
  <S.Container {...props}>{children}</S.Container>
)

export default Button
