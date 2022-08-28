import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PetitionProps } from 'components/home/tiles/TileProps';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 17px;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  margin-bottom: 7px;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

// TODO: detail 내용 동적으로 바꾸기
function Petition(): JSX.Element {
  const [petition, setPetition] = useState<PetitionProps[]>([]);

  useEffect(() => {
    axios
      .get('/api/main')
      .then(function (response) {
        const result = response.data.data;
        setPetition(result.popularPetitions);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      });
  }, []);

  return (
    <Wrapper>
      {/* <P>
        <Span>[D-3] </Span>학교 오르막에 에스컬레이터를 설치해주세요.
      </P>
      <P>
        <Span>[D-12] </Span>코로나를 없애주세요.
      </P> */}
      {petition.map((petition) => (
        <P key={petition.id}>
          <Link to={`/board-petition/board?id=${petition.id}`}>
            {petition.title}
          </Link>
        </P>
      ))}
    </Wrapper>
  );
}

export default Petition;
