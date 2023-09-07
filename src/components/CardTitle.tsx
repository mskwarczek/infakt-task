import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.lineHeight.small};
  display: flex;
  flex-flow: row nowrap;
`;

const ImageWrapper = styled.img`
  margin-right: ${({ theme }) => theme.lineHeight.medium};
  border-radius: ${({ theme }) => theme.borderRad.small};
`;

const LabelParagraph = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: ${({ theme }) => theme.lineHeight.medium};
`;

const TextParagraph = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: ${({ theme }) => theme.lineHeight.large};
`;

interface CardSectionProps {
  label: string;
  text: string;
  pic: string;
};

const CardTitle = ({ label, text, pic }: CardSectionProps) => {
  return (
    <SectionWrapper>
      <ImageWrapper src={pic} alt={text} width='64' height='64' />
      <div>
        <LabelParagraph>{label}</LabelParagraph>
        <TextParagraph>{text}</TextParagraph>
      </div>
    </SectionWrapper>
  );
};

export default CardTitle;
