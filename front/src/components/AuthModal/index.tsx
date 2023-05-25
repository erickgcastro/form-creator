import { WindowBlur } from '../WindowBlur';
import { useRouter } from 'next/router';
import Loading from '../Loading';
import * as S from './styles';
import useAuth from './useAuth';

type TypesAuthModal = {
  page: boolean;
  closeModal: () => void;
  redirect?: string;
};

const AuthModal = ({ page, redirect, closeModal }: TypesAuthModal) => {
  const router = useRouter();
  const { form, currentPage, loading, togglePage, handleChangeInput, handleSubmit } =
    useAuth(page, closeModal, redirect);

  if (loading) {
    return (
      <WindowBlur center>
        <S.Container style={{ height: 332 }}>
          <S.LoadingArea>
            <Loading />
          </S.LoadingArea>
        </S.Container>
      </WindowBlur>
    );
  }

  return (
    <WindowBlur center onClick={!loading && closeModal}>
      <S.Container onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <S.BtnCloseModal type='button' onClick={closeModal}>
          <span style={{ fontSize: 22 }} className='material-icons' translate='no'>
            close
          </span>
        </S.BtnCloseModal>

        <S.Header>
          <S.PageOption type='button' focus={!currentPage} onClick={togglePage}>
            Login
          </S.PageOption>
          <S.PageOption type='button' focus={currentPage} onClick={togglePage}>
            Sign up
          </S.PageOption>
        </S.Header>

        <div style={{ marginTop: 30 }}>
          <S.InputsArea>
            {!!currentPage && (
              <div>
                <S.InputName htmlFor='name'>Name</S.InputName>
                <S.Input
                  type='text'
                  name='name'
                  id='name'
                  value={form.name}
                  onChange={handleChangeInput}
                  autoComplete='on'
                />
              </div>
            )}
            <div>
              <S.InputName htmlFor='email'>Email</S.InputName>
              <S.Input
                type='text'
                name='email'
                id='email'
                value={form.email}
                onChange={handleChangeInput}
                autoComplete='on'
              />
            </div>
            <div style={{ position: 'relative' }}>
              <S.InputName htmlFor='password'>Password</S.InputName>
              <S.Input
                type='password'
                name='password'
                id='password'
                value={form.password}
                onChange={handleChangeInput}
                autoComplete='on'
              />
            </div>
          </S.InputsArea>
        </div>

        <div>
          <S.BtnSubmit type='submit'>Submit</S.BtnSubmit>
          <S.ForgotPassword
            type='button'
            onClick={() => router.push('/auth/forgot-password?')}
          >
            Forgot password?
          </S.ForgotPassword>
        </div>
      </S.Container>
    </WindowBlur>
  );
};

export default AuthModal;
