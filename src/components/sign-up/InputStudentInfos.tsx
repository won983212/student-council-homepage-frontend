import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { majorList } from 'components/user/Major';
import {
  Header,
  HeaderPoint,
  InputContainer,
  Wrapper,
} from 'components/sign-up/SignUpComponents';
import React, { useCallback, useRef, useState } from 'react';
import CopyrightTerm from 'components/global/CopyrightTerm';
import CheckPasswordSecurity from './CheckPasswordSecurity';

const InnerContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  /* height: 620px; */
  ${({ theme }) => theme.media.mobile} {
    height: 350px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 5px;
    span {
      font-size: ${({ theme }) => theme.fonts.size.sm};
    }
  }
  background-color: ${({ theme }) => theme.colors.gray040};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;

  span {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const NameInput = styled.input.attrs({ type: 'text', required: true })`
  all: unset;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 640px;
  padding: 0 10px;
`;

const PasswordInput = styled.input.attrs({
  type: 'password',
  required: true,
})`
  all: unset;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 640px;
  padding: 0 10px;
`;

const PhoneNumInput = styled.input.attrs({
  type: 'text',
  required: true,
})`
  all: unset;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 640px;
  padding: 0 10px;
`;

const CodeInput = styled.input.attrs({
  type: 'code',
  required: true,
})`
  all: unset;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 540px;
  padding: 0 10px;
`;

const CodeButton = styled.input.attrs({ type: 'submit' })`
  all: unset;
  width: 100px;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const SendButton = styled.input.attrs({ type: 'submit' })<{ active: boolean }>`
  all: unset;
  width: 200px;
  height: 80%;
  background-color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.secondary
      : ({ theme }) => theme.colors.gray200};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const SignUpButton = styled.button<{ active: boolean }>`
  all: unset;
  width: 450px;
  height: 50px;
  margin: 20px 0;
  background-color: ${({ active }) =>
    active
      ? ({ theme }) => theme.colors.secondary
      : ({ theme }) => theme.colors.gray300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  cursor: ${({ active }) => (active ? 'pointer' : 'default')};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  ${({ theme }) => theme.media.mobile} {
    width: 70%;
    margin: 5px 0;
  }
`;

const Select = styled.select`
  all: unset;
  height: 100%;
  width: 640px;
  padding: 0 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.base};
  color: ${(props) =>
    props.value ? 'black' : ({ theme }) => theme.colors.gray500};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PasswordSecurityLevel = styled.div<{ level: number }>`
  width: 500px;
  height: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  overflow: hidden;
  ${({ theme }) => theme.media.mobile} {
    width: 70%;
    height: 40px;
    margin-top: 20px;
  }
`;

const SecurityBlock = styled.div<{ level: number }>`
  background-color: ${({ level }) => {
    if (level < 2) return 'red';
    if (level < 4) return 'orange';
    return 'green';
  }};
  width: ${({ level }) => {
    switch (level) {
      case 0:
        return '0%';
      case 1:
        return '20%';
      case 2:
        return '40%';
      case 3:
        return '60%';
      case 4:
        return '80%';
      case 5:
        return '100%';
      default:
        return '0%';
    }
  }};
  border-left: 0.3px solid white;
  transition: all 0.2s ease-in-out;
`;

const Message = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

function InputStudentInfos({
  studentId,
  token,
}: {
  studentId: string | null;
  token: string;
}): JSX.Element {
  const [signUpForm, setSignUpForm] = useState({
    studentId,
    password: '',
    major: '',
    phoneNum: '',
    name: '',
    token,
  });

  const [phoneCodeState, setPhoneCodeState] = useState({
    sent: false,
    success: false,
    token: '',
    code: '',
    errMsg: '',
    verified: false,
  });

  const [passwordState, setPasswordState] = useState({
    securityLevel: 0,
    checkPassword: '',
    errMsg: '',
    verified: false,
  });

  const codeInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handlePasswordChange = ({ currentTarget }: any) => {
    const password = currentTarget.value;
    setSignUpForm((prev) => ({
      ...prev,
      password,
    }));
    setPasswordState((prev) => ({
      ...prev,
      securityLevel: CheckPasswordSecurity(password),
    }));
  };
  /** ?????? ??????????????? ???????????? ?????? */
  const handleSignUp = async () => {
    const data = JSON.stringify({
      classId: signUpForm.studentId,
      password: signUpForm.password,
      major: signUpForm.major,
      name: signUpForm.name,
      register: 'IN',
      phone: signUpForm.phoneNum,
    });
    try {
      const res = await axios({
        method: 'post',
        url: '/api/users',
        headers: {
          'Content-Type': 'application/json',
          'EMAIL-VALIDATION-TOKEN': token,
        },
        data,
      });
      if (res.data.successful) {
        navigate('/sign-up/success');
      } else {
        alert('something`s not right!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  /** ??????????????? ????????? ?????? */
  const handlePhoneCodeSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhoneCodeState((prev) => ({ ...prev, sent: true }));
    let phoneNumber = signUpForm.phoneNum;
    if (phoneNumber.includes('-')) {
      phoneNumber = phoneNumber.replaceAll('-', '');
      setSignUpForm((prev) => ({ ...prev, phoneNum: phoneNumber }));
    }
    try {
      const { data } = await axios({
        method: 'get',
        url: `/api/auth/sms-code?phone=${phoneNumber}`,
      });
      if (data.token) {
        setPhoneCodeState((prev) => ({
          ...prev,
          success: true,
          token: data.token,
        }));
        if (codeInputRef.current !== null) {
          codeInputRef.current.focus();
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  /** ??????????????? ????????? ????????? ????????? ???????????? ?????? */
  const submitPhoneCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = JSON.stringify({
      token: phoneCodeState.token,
      code: phoneCodeState.code,
    });
    try {
      const res = await axios({
        method: 'post',
        url: '/api/auth/sms-code',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      });
      if (res.data.successful) {
        // ?????? ??????
        setPhoneCodeState((prev) => ({ ...prev, verified: true }));
      }
    } catch (e) {
      //
    }
  };
  /** ???????????? ???????????? ?????? */
  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPasswordState((prev) => ({ ...prev, checkPassword: value }));
    if (value === signUpForm.password && CheckPasswordSecurity(value) > 0) {
      setPasswordState((prev) => ({ ...prev, verified: true }));
    }
  };

  /** ????????? ????????? ??? ???????????? ?????? */
  const isRegisterable = (): boolean => {
    return (
      phoneCodeState.verified &&
      passwordState.verified &&
      signUpForm.name.length > 0
    );
  };

  return (
    <Wrapper>
      <Header>
        ??????????????? ???????????? <HeaderPoint>????????????</HeaderPoint>
      </Header>
      <InnerContainer>
        <InputContainer>
          <div>{studentId}@dankook.ac.kr</div>
        </InputContainer>
        <InputContainer>
          <NameInput
            placeholder="?????? ??????"
            value={signUpForm.name}
            onChange={({ currentTarget }) =>
              setSignUpForm((prev) => ({ ...prev, name: currentTarget.value }))
            }
          />
        </InputContainer>
        <InputContainer>
          <PasswordInput
            placeholder="???????????? ??????"
            value={signUpForm.password}
            onChange={handlePasswordChange}
          />
        </InputContainer>
        {signUpForm.password && (
          <PasswordSecurityLevel level={passwordState.securityLevel}>
            <SecurityBlock level={passwordState.securityLevel} />
          </PasswordSecurityLevel>
        )}

        <InputContainer>
          <PasswordInput
            placeholder="???????????? ??????"
            value={passwordState.checkPassword}
            onChange={handleCheckPassword}
          />
        </InputContainer>
        {passwordState.checkPassword !== '' &&
          (passwordState.checkPassword === signUpForm.password ? (
            <Message>??????????????? ???????????????.</Message>
          ) : (
            <Message>??????????????? ???????????? ????????????.</Message>
          ))}
        <InputContainer>
          <Select
            name="major"
            value={signUpForm.major}
            onChange={({ currentTarget }) =>
              setSignUpForm((prev) => ({ ...prev, major: currentTarget.value }))
            }
          >
            <option disabled value="" defaultValue="">
              ?????? ??????
            </option>
            {Object.entries(majorList).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </Select>
        </InputContainer>
        <InputContainer onSubmit={handlePhoneCodeSend}>
          <PhoneNumInput
            placeholder="????????? ?????? ??????"
            maxLength={13}
            minLength={13}
            disabled={phoneCodeState.verified}
            value={signUpForm.phoneNum.replace(
              /(\d{3})(\d{4})(\d{4})/,
              '$1-$2-$3',
            )}
            onChange={({ currentTarget }) =>
              setSignUpForm((prev) => ({
                ...prev,
                phoneNum: currentTarget.value,
              }))
            }
          />
          {!phoneCodeState.verified && (
            <SendButton
              active={signUpForm.phoneNum.length >= 10}
              value="???????????? ??????"
              disabled={signUpForm.phoneNum.length < 10}
            />
          )}
        </InputContainer>

        {phoneCodeState.sent && !phoneCodeState.verified && (
          <InputContainer onSubmit={submitPhoneCode}>
            <CodeInput
              ref={codeInputRef}
              placeholder="???????????? ??????"
              value={phoneCodeState.code}
              onChange={({ currentTarget }) =>
                setPhoneCodeState((prev) => ({
                  ...prev,
                  code: currentTarget.value,
                }))
              }
            />
            <CodeButton value="??????" />
          </InputContainer>
        )}
        {phoneCodeState.verified && <span>????????? ????????? ?????????????????????.</span>}
        <SignUpButton
          active={isRegisterable()} // TODO:?????? ?????? ?????? ???
          disabled={!isRegisterable()}
          onClick={handleSignUp}
        >
          ????????????
        </SignUpButton>
        <span>
          ????????? ?????????????????? ???, ?????? ????????? ????????? ???????????? ?????? ??? ????????????.
        </span>
      </InnerContainer>
      <CopyrightTerm />
    </Wrapper>
  );
}

export default InputStudentInfos;
