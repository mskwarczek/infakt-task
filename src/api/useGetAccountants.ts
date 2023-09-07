import { useEffect, useState } from 'react';
import { ApiType, AccountantResponseType } from './types';

const useGetAccountants = (amount: number) => {
  const [result, setResult] = useState<ApiType<AccountantResponseType>>({
    status: 'init',
  });

  const includedData = 'gender,name,email,login,cell,picture';

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=abc&results=${amount}&inc=${includedData}&page=1`)
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
    fetch(`https://randomuser.me/api/?seed=abc&results=${amount}&inc=${includedData}&page=${result.payload.info.page + 1}`)
      .then(response => response.json())
      .then(response => {
        setResult({
          status: 'finished',
          payload: {
            info: response.info,
            results: [...result.payload.results, ...response.results],
          }
        });
      })
      .catch(error => setResult({ status: 'error', error }));
  };

  return { result, nextPage };
};

export default useGetAccountants;
