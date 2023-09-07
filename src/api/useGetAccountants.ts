import { useEffect, useState } from 'react';
import { ApiType, AccountantResponseType } from './types';

const useGetAccountants = (amount: number) => {
  const [result, setResult] = useState<ApiType<AccountantResponseType>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(`https://randomuser.me/api/?seed=abc&results=${amount}`)
      .then(response => response.json())
      .then(response => setResult({ status: 'finished', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, [amount]);

  return result;
};

export default useGetAccountants;
