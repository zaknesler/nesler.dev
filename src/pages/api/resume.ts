import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../resume.json'

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data)
}

export default handle
