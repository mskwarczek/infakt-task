import styled from 'styled-components';

import { AccountantType } from '../api/types';
import Button from './Button';
import CardSection from './CardSection';
import CardTitle from './CardTitle';

const CardWrapper = styled.div`
  width: 300px;
  padding: ${({ theme }) => theme.lineHeight.medium};
  border: 1px solid ${({ theme }) => theme.color.bg.secondary};
  border-radius: ${({ theme }) => theme.borderRad.medium};
  box-shadow: 0px 1px 3px rgba(0,0,0, 0.12);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const MailText = styled.a`
  text-decoration: underline;
`;

const CurrencyText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  line-height: ${({ theme }) => theme.lineHeight.xsmall};
`;

const AccountantCard = ({ cell, gender, name, email, picture }: AccountantType) => {

  return (
    <CardWrapper>
      <CardTitle label={gender === 'male' ? 'Twój księgowy' : 'Twoja księgowa'} text={`${name.first} ${name.last}`} pic={picture.medium} />
      <CardSection label={'E-mail'}><MailText href={`mailto:${email}`}>{email}</MailText></CardSection>
      <CardSection label={'Telefon'}><a href={`tel:${cell}`}>{cell}</a></CardSection>
      <CardSection label={'Średnia cena netto usługi / m-c'}>350,00 <CurrencyText>PLN</CurrencyText></CardSection>
      <Button text={'Dowiedz się więcej'} />
    </CardWrapper>
  );
};

export default AccountantCard;
