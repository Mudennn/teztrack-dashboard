import axios from "axios";
import { useEffect, useState } from "react"

const useTzkt = (param) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://api.mainnet.tzkt.io/';

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response, loading, error
  }
}

export default useTzkt