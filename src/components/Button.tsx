import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 151px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.bg.action};
  font-weight: ${({ theme }) => theme.fontWeight.action};
  border-radius: ${({ theme }) => theme.borderRad.small};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.color.text.action};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

interface CardSectionProps {
  text: string;
  action?: (...args: any[]) => void;
};

const Button = ({ text, action }: CardSectionProps) => {
  return (
    <ButtonWrapper onClick={action}>
      <Label>{text}</Label>
    </ButtonWrapper>
  );
};

export default Button;
