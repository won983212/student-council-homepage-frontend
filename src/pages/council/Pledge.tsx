import styled from "styled-components";

import logo from 'static/images/logos/student-council.png';

const Container = styled.div`
  max-width: 1160px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px 80px;
  margin: 40px auto;
  ${({ theme }) => theme.media.mobile} { 
    font-size: 12px;
    padding: 50px 10px; 
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0 0 40px 25px;
  ${({ theme }) => theme.media.mobile} { margin: 0 5px; }
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: 600;
  margin: 0 0 20px 25px;
  ${({ theme }) => theme.media.mobile} { 
    margin: 20px 5px; 
  }
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  border-radius: 3px;
  margin-bottom: 70px;
  ${({ theme }) => theme.media.tablet} { margin-bottom: 50px; }
  ${({ theme }) => theme.media.mobile} { margin-bottom: 30px; }
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0px 10px;
  ${({ theme }) => theme.media.tablet} { flex-direction: column; }
  ${({ theme }) => theme.media.mobile} { flex-direction: column; }
`;

const Img = styled.img`
  ${({ theme }) => theme.media.mobile} { 
    width: 335px; 
    height: 180px;
  }
`;

const InfoWrapper = styled.div``;

const Dl = styled.dl`
  margin: 10px 0 30px 0;
  font-size: ${({ theme }) => theme.fonts.size.lg};
  ${({ theme }) => theme.media.tablet} { margin-top: 50px; }
  ${({ theme }) => theme.media.mobile} { margin-top: 50px; }
`;

const Dt = styled.dt`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  padding-bottom: 12px;
`;

const Dd = styled.dd`
  padding: 25px 0 0 0;
`;

function Pledge() {
  return (
    <Container>
      <Title>단국대학교 제54대 PLAY! 총학생회</Title>
      <SubTitle>총학생회 기조</SubTitle>
      <Line /> 
      <DetailContainer>
        <Img src={logo} alt="student-council-logo" width={490} height={250} />
        <InfoWrapper>
          <Dl>
            <Dt>자치</Dt>
            <Dd>- 우리를 위해 적극적으로 소통하는 총학생회</Dd>
            <Dd>- 우리의 권리를 지키고 나아가는 총학생회</Dd>
          </Dl>
          <Dl>
            <Dt>인권</Dt>
            <Dd>- 인권의 사각지대를 직접 비춰 들여다보는 총학생회</Dd>
            <Dd>- 믿고 도움을 요청할 수 있는 총학생회</Dd>
          </Dl>
          <Dl>
            <Dt>낭만</Dt>
            <Dd>- 우리의 기대를 현실로 보여주는 총학생회</Dd>
          </Dl>
        </InfoWrapper>
      </DetailContainer>
    </Container>
  )
}

export default Pledge;