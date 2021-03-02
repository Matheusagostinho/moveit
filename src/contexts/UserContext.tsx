import { useRouter } from 'next/router'
import {
  createContext,
  ReactNode,
  useEffect,
  useState
} from 'react'

import {ReactFacebookLoginInfo, ReactFacebookFailureResponse} from "react-facebook-login"
import Cookie from 'js-cookie'

interface userDataPros{
  name:string | undefined
  email:string  | undefined
  picture: string | undefined
}

interface UserProviderProps {
  children: ReactNode
}
interface UserContextData {
  responseFacebook: (response: ReactFacebookLoginInfo & ReactFacebookFailureResponse)=> void
  userData: userDataPros
  componentClicked: ()=> void
}

export const UserContext = createContext({} as UserContextData)



export function UserProvider({ children }: UserProviderProps) {

  const router = useRouter()
  const [userData, setUserData] = useState({} as userDataPros)
    function componentClicked(){

      router.push('/challenges')
    }
    const responseFacebook = (response: ReactFacebookLoginInfo & ReactFacebookFailureResponse) => {

        if(response.status !== 'unknown'){
          setUserData({name: response.name,
            email:response.email,
            picture: response.picture?.data.url})
        }
      }



  useEffect(() => {
    Cookie.set('email', String(userData.email))
    Cookie.set('name', String(userData.name))
    Cookie.set('pictureUrl', String(userData.picture))
  }, [])
  console.log(userData);

  return (
    <UserContext.Provider
      value={{
        responseFacebook,
        userData,
        componentClicked,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
