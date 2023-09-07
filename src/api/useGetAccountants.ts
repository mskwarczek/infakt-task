import { useEffect, useState } from 'react';
import { ApiType, AccountantResponseType } from './types';

const useGetAccountants = (amount: number) => {
  const [result, setResult] = useState<ApiType<AccountantResponseType>>({
    status: 'init',
  });

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=abc&results=${amount}&page=1`)
      .then(response => response.json())
      .then(response => setResult({ status: 'finished', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, [amount]);

  const nextPage = () => {
    if (!(result.status === 'finished')) return;
    setResult({
      status: 'loading',
      payload: result.payload,
    });
    fetch(`https://randomuser.me/api/?seed=abc&results=${amount}&page=${result.payload.info.page + 1}`)
      .then(response => response.json())
      .then(response => {
        const newResults = [...result.payload.results, ...response.results];
        setResult({
          status: 'finished',
          payload: {
            info: response.info,
            results: newResults,
          }
        });
      })
      .catch(error => setResult({ status: 'error', error }));
  };

  return { result, nextPage };
};

export default useGetAccountants;
