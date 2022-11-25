import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../lib/models/User'

const Hello = async (req: NextApiRequest, res: NextApiResponse) => {

    res.json({
        status: 200,
        data: 'Hello',
    })

}
export default Hello