import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../lib/models/User'

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req)
  try {
    const user = await User.find({});
    res.json({
      status: 200,
      data: user,
    })
  } catch (error) {
    res.json({
      status: 400,
      message: error,
    })
  }

}
export default getUsers