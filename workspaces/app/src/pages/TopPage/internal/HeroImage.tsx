import styled from 'styled-components';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img.attrs({
  alt: 'Cyber TOON',
  height: 900,
  src: '/images/top-hero.webp',
  width: 1600,
})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroImage: React.FC = () => {
  return (
    <_Wrapper>
      <_Image />
    </_Wrapper>
  );
};
