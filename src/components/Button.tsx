import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 151px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.bg.action};
  font-weight: ${({ theme }) => theme.fontWeight.action};
  border-radius: ${({ theme }) => theme.borderRad.small};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: inherit;
  border: none;
  color: ${({ theme }) => theme.color.text.action};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
  &:hover {
    background-color: ${({ theme }) => theme.color.text.action};
    color: ${({ theme }) => theme.color.bg.action};
  }
`;

interface CardSectionProps {
  text: string;
  disabled?: boolean;
  action?: (...args: any[]) => void;
};

const Button = ({ text, disabled, action }: CardSectionProps) => {
  return (
    <ButtonWrapper onClick={action && !disabled ? () => action() : () => null} disabled={disabled}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
