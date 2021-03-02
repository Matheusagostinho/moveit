import { setOptions, getSession } from 'next-auth/client'
import {SetOptionsParams} from 'next-auth/client'
setOptions({ site: process.env.NEXTAUTH_URL } as SetOptionsParams)

export default async (req, res) =>  {
  const session = await getSession({ req })
  console.log('session', session)
  res.end()
}
