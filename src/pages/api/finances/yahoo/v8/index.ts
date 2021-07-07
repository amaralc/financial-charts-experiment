// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { initMiddleware } from '@helpers/initMiddleware';
import { getShareHistoricalData } from '@services/getShareHistoricalData';
import { IError } from '@shared/interfaces/IError';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'OPTIONS'],
  }),
);

interface IResponse {
  [key: string]: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse | IError>,
) {
  try {
    // Run cors
    await cors(req, res);

    // if (!(await requestSchema.isValid(req.query))) {
    //   throw new Error('Validation has failed');
    // }

    // Get data
    // const { machineId, from, to } = req.query as IUrlParams;

    // Run service
    const { data, status } = await getShareHistoricalData();
    // console.log(historicalAmplitudesResponseData)

    // Return
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    //return res.status(400).json({ error: error.message });
  }
}