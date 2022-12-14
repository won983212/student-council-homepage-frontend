import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { ConferenceProps } from 'components/conference/ConferenceProps';
import { useSearchParams } from 'react-router-dom';
import PageControl from 'components/conference/PageControl';
import ConferenceBoard from 'components/conference/ConferenceBoard';

const Container = styled.div`
  padding-top: 4%;
  background-color: ${(props) => props.theme.colors.white};
`;

function Conference(): JSX.Element {
  const [board, setBoard] = useState<ConferenceProps[]>([]);
  const [boardsCount, setBoardsCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get('/api/conference')
      .then(function (response) {
        const result = response.data;
        setBoard(result.content.slice((page - 1) * 6, page * 6));
        setBoardsCount(result.totalElements);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    setPage(Number(searchParams.get('page')) || 1);
  }, [searchParams]);

  return (
    <Container>
      <ConferenceBoard
        posts={board}
        totalBoards={boardsCount}
        currentPage={page}
      />
      <PageControl postCount={boardsCount} currentPage={page} />
    </Container>
  );
}

export default Conference;
