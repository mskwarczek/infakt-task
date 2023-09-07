import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.lineHeight.small};
`;

const LabelParagraph = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: ${({ theme }) => theme.lineHeight.small};
`;

const TextParagraph = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

type CardSectionProps = {
  label: string,
  children?: React.ReactNode,
};

const CardSection = ({ label, children }: CardSectionProps) => {
  return (
    <SectionWrapper>
      <LabelParagraph>{label}</LabelParagraph>
      <TextParagraph>{children}</TextParagraph>
    </SectionWrapper>
  );
};

export default CardSection;
