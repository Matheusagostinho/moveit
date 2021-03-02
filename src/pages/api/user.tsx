import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../utils/database'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { name } = request.body
    const { email } = request.body

    if (!name) {
      response.status(400).json({ message: 'Missing name' })
      return
    }

    const { db } = await connect()

    const dbResponse = db.collection('users').insertOne({
      email: email,
      name: name

    })

    response.status(200).json((await dbResponse).ops[0])
  } else {
    response.status(400).json({ message: 'metodo errado' })
  }
}
