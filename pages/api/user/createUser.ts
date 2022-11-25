import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../lib/models/User'

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const user = await User.create(req.body)
        res.json({
            status: 200,
            data: user
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error
        })
    }


}

export default createUser