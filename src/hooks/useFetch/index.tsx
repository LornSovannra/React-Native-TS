import axios from 'axios';
import {useEffect, useState} from 'react';
import {Props} from './props';

export default function (url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  async function fetchData() {
    await axios
      .get(url)
      .then(res => {
        console.log(res)
        setData(res.data);
        setIsFetching(false);
      })
      .catch(err => {
        console.log(err)
        setError(err);
        setIsFetching(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, error, isFetching};
}
