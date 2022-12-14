import styled from 'styled-components';
import BannerImg from 'static/images/global-banner/dankook.png';

const Container = styled.div`
  background-image: url(${BannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  ${({ theme }) => theme.media.desktop} {
    height: 250px;
  }
  ${({ theme }) => theme.media.tablet} {
    height: 200px;
  }
  ${({ theme }) => theme.media.mobile} {
    height: 150px;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.33);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.x3xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  margin-bottom: 12px;
`;

const Detail = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

function GlobalBanner({
  title,
  detail,
}: {
  title: string;
  detail: string;
}): JSX.Element {
  return (
    <Container>
      <Banner>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Banner>
    </Container>
  );
}

export default GlobalBanner;
