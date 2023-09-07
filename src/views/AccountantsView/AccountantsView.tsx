import styled from 'styled-components';

import AccountantCard from '../../components/AccountantCard';
import useGetAccountants from '../../api/useGetAccountants';

const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  row-gap: ${({ theme }) => theme.lineHeight.medium};
  column-gap: ${({ theme }) => theme.lineHeight.medium};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const AccountantsView = () => {
  const accountants = useGetAccountants(4);

  return (
    <ViewWrapper>
      {accountants.status === 'loading' && <div>Loading...</div>}
      {accountants.status === 'finished' &&
        accountants.payload.results.map(accountant => (
          <AccountantCard
            key={accountant.login.uuid}
            cell={accountant.cell}
            gender={accountant.gender}
            name={accountant.name}
            email={accountant.email}
            picture={accountant.picture}
            login={accountant.login}
          />
        ))}
      {accountants.status === 'error' && (
        <div>An error has occured. {accountants.error.message}</div>
      )}
    </ViewWrapper>
  );
};

export default AccountantsView;
