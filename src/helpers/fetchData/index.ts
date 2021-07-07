import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const { data, status } = await axios.get(url);
    return { data, status };
  } catch (error) {
    console.error(error);
  }
}