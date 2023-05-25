import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { AxiosApi, ThrowToastError } from 'src/services';
import * as S from './styles';

const ForgotPassword = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isDisabled) return;
    setisLoading(true);
    if (inputRef.current && inputRef.current.value) {
      const value = inputRef.current.value;
      await AxiosApi()
        .post('/auth/forgot-password', { email: value })
        .then(() => {
          setIsDisabled(true);
          toast.success('The email has been sent');
        })
        .catch((err) => ThrowToastError(err));
    }
    setisLoading(false);
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit}>
        <S.Logo href='/' translate='no'>
          LOGO
        </S.Logo>
        <S.Title>Type your e-mail</S.Title>
        <S.Input type='text' ref={inputRef} />
        <S.Button type='submit' disabled={isDisabled || isLoading}>
          Submit
        </S.Button>
      </S.Container>
    </>
  );
};

export default ForgotPassword;
