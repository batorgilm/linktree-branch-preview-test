import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../lib/models/User';

const Hello = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({
    status: 200,
    data: 'Hello world waving at new branch',
  });
};
export default Hello;
