import styled from 'styled-components';

import AccountantCard from '../components/AccountantCard';
import Button from '../components/Button';
import useGetAccountants from '../api/useGetAccountants';

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: space-between;
  row-gap: ${({ theme }) => theme.lineHeight.medium};
  column-gap: ${({ theme }) => theme.lineHeight.medium};
  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const AccountantsView = () => {

  const { result: accountants, nextPage } = useGetAccountants(4);
  console.log('accountants', accountants)

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
