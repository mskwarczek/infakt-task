import React from 'react';

import AccountantCard from '../../components/AccountantCard/AccountantCard';
import useGetAccountants from '../../api/useGetAccountants';

const AccountantsView = () => {
  const accountants = useGetAccountants(4);

  console.log('accountants', accountants);

  return (
    <div>
      AccountantsView
      {accountants.status === 'loading' && <div>Loading...</div>}
      {accountants.status === 'finished' &&
        accountants.payload.results.map(accountant => (
          <AccountantCard
            key={accountant.login.uuid}
            cell={accountant.cell}
            name={accountant.name}
            email={accountant.email}
            picture={accountant.picture}
            login={accountant.login}
          />
        ))}
      {accountants.status === 'error' && (
        <div>Error.</div>
      )}
    </div>
  );
};

export default AccountantsView;
