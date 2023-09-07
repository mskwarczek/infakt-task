import styled from 'styled-components';

import AccountantCard from '../components/AccountantCard';
import Button from '../components/Button';
import useGetAccountants from '../api/useGetAccountants';

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.lineHeight.medium};
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    justify-content: space-between;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const AccountantsView = () => {
  const { result: accountants, nextPage } = useGetAccountants(5);

  return (
    <div>
      <CardsWrapper>
        {accountants.status === 'init' && <div>Ładowanie...</div>}
        {(accountants.status === 'finished' || accountants.status === 'loading') &&
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
          <div>Wystąpił błąd. {accountants.error.message}</div>
        )}
      </CardsWrapper>
      {accountants.status === 'finished' && (
        <ButtonWrapper>
          <Button text={'Wyświetl więcej'} action={nextPage} />
        </ButtonWrapper>
      )}
      {accountants.status === 'loading' && (
        <ButtonWrapper>
          <Button text={'Ładowanie...'} disabled />
        </ButtonWrapper>
      )}
    </div>
  );
};

export default AccountantsView;
