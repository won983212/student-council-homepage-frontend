import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ReactModal from 'react-modal';
import { Desktop, Tablet, Mobile } from 'hooks/MediaQueries';
import Modal from './Modal';

const customStylesDesktop = {
  content: {
    top: '25%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginTop: '290px',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

const customStylesMobile = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginTop: '80px',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-divs: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  padding: 70px 100px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.tablet} {
    padding: 50px 50px;
  }
  ${({ theme }) => theme.media.mobile} {
    padding: 40px 20px 60px 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.md};
  user-select: none;
`;

const Select = styled.select`
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: black;
  width: 400px;
  height: 40px;
  margin-top: 15px;
  padding-left: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.media.tablet} {
    width: 300px;
  }
  ${({ theme }) => theme.media.mobile} {
    width: 180px;
  }
`;

const Content = css`
  margin-top: 15px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.gray040};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
  }
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fonts.size.base};
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const TitleInput = styled.input`
  ${Content}
  width: 100%;
  height: 40px;
`;

const Textarea = styled.textarea`
  ${Content}
  width: 100%;
  height: 450px;
  padding-top: 10px;
  resize: none;
`;

const ButtonDiv = styled.div`
  margin: auto;
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 260px;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.base};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
  border-radius: 5px;
`;

function Editor(): JSX.Element {
  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cookies] = useCookies(['X-AUTH-TOKEN']);

  const onCategoryHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
  };

  const onTitleHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTitle(value);
  };

  const onContentHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setContent(value);
  };

  const onOpenModalHandler = () => {
    if (category === '') {
      alert('??????????????? ??????????????????.');
    } else if (title === '') {
      alert('?????? ????????? ??????????????????');
    } else if (content === '') {
      alert('?????? ????????? ??????????????????');
    } else {
      setIsOpen(true);
    }
  };

  const onCloseModalHandler = () => {
    setIsOpen(false);
  };

  const onSubmitHandler = () => {
    // TODO: ????????? ????????? ??????
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmitHandler}>
          <Label htmlFor="category">
            ????????????
            <Select
              name="category"
              id="category"
              value={category}
              onChange={onCategoryHandler}
              defaultValue=""
            >
              <option value="" disabled>
                ??????????????? ??????????????????.
              </option>
              <option value="school-life">????????????</option>
              <option value="school-facilities">????????????</option>
              <option value="covid-19">?????????19</option>
              <option value="scholarship">?????????</option>
              <option value="lesson">??????</option>
              <option value="etc">??????</option>
            </Select>
          </Label>

          <Label htmlFor="title">
            ?????? ??????
            <TitleInput
              type="text"
              id="title"
              value={title}
              onChange={onTitleHandler}
              placeholder="?????? ????????? ??????????????????."
            />
          </Label>
          <Label htmlFor="content">
            ?????? ??????
            <Textarea
              id="content"
              value={content}
              onChange={onContentHandler}
            />
          </Label>
          <ButtonDiv>
            <Button type="button" onClick={onOpenModalHandler}>
              ????????????
            </Button>
          </ButtonDiv>
        </Form>
        <Desktop>
          <ReactModal
            isOpen={isOpen}
            style={customStylesDesktop}
            ariaHideApp={false}
            contentLabel="???????????? ?????? ??? ?????? ??????"
            onRequestClose={() => setIsOpen(false)}
          >
            <Modal
              onCloseModalHandler={onCloseModalHandler}
              onSubmitHandler={onSubmitHandler}
            />
          </ReactModal>
        </Desktop>
        <Tablet>
          <ReactModal
            isOpen={isOpen}
            style={customStylesMobile}
            ariaHideApp={false}
            contentLabel="???????????? ?????? ??? ?????? ??????"
            onRequestClose={() => setIsOpen(false)}
          >
            <Modal
              onCloseModalHandler={onCloseModalHandler}
              onSubmitHandler={onSubmitHandler}
            />
          </ReactModal>
        </Tablet>
        <Mobile>
          <ReactModal
            isOpen={isOpen}
            style={customStylesMobile}
            ariaHideApp={false}
            contentLabel="???????????? ?????? ??? ?????? ??????"
            onRequestClose={() => setIsOpen(false)}
          >
            <Modal
              onCloseModalHandler={onCloseModalHandler}
              onSubmitHandler={onSubmitHandler}
            />
          </ReactModal>
        </Mobile>
      </Wrapper>
    </Container>
  );
}

export default Editor;
