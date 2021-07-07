import { fetchData } from "@helpers/fetchData";

export const getShareHistoricalData = async () => {
  try {

    const url = 'https://query1.finance.yahoo.com/v8/finance/chart/GOOGL?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance'
    const response = await fetchData(url);

    return { ...response };
  } catch (error) {
    throw new Error(error.message);
  }
};