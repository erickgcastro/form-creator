import Image from 'next/image';
import { useUserContext } from 'src/context';
import { useRouter } from 'next/router';
import { WindowBlur } from 'src/components/WindowBlur';
import { useLogout } from 'src/hooks';
import type { TypesNavbar } from 'src/types';
import * as S from './styles';

interface Types extends TypesNavbar {
  setShareModal: (s: any) => void;
  setIsModalOpen: (a: any) => void;
}

const Modal = ({ page, blockUser, redirect, setShareModal, setIsModalOpen }: Types) => {
  const handleLogout = useLogout();
  const { user } = useUserContext({});
  const { query } = useRouter();

  return (
    <WindowBlur
      onClick={() => setIsModalOpen(false)}
      style={{ justifyContent: 'flex-start', padding: '0' }}
    >
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.UserArea>
          {user && (
            <>
              <S.Image>
                <Image src='/user.png' layout='fill' width={50} height={50} alt='' />
              </S.Image>
              <div>
                <S.Text style={{ marginBottom: '2px' }}>
                  {user?.name.split(' ')[0]}
                </S.Text>
                <S.Text style={{ fontSize: '14px', fontWeight: '400' }}>
                  {user?.email}
                </S.Text>
              </div>
            </>
          )}
        </S.UserArea>

        {!user && (
          <S.BtnLink
            style={{ marginBottom: '10px' }}
            onClick={() => setIsModalOpen(false)}
            href='/'
          >
            Login
          </S.BtnLink>
        )}

        {user && (
          <S.BtnLink
            href='/dashboard'
            onClick={() => setIsModalOpen(false)}
            checked={page === 'dashboard'}
          >
            Dashboard
          </S.BtnLink>
        )}

        {(page === 'dashboard' || page === 'edit') && (
          <S.BtnLink
            href='/dashboard/edit-user'
            onClick={() => setIsModalOpen(false)}
            checked={page === 'edit'}
          >
            Edit user
          </S.BtnLink>
        )}

        {query.slug && (
          <>
            <S.BtnLink
              href={`/forms/${query.slug}`}
              onClick={() => setIsModalOpen(false)}
              checked={page === 'questions'}
            >
              Questions
            </S.BtnLink>
            {blockUser === user?.id && (
              <S.BtnLink
                checked={page === 'answers'}
                onClick={() => setIsModalOpen(false)}
                href={`/forms/${query.slug}/answers`}
              >
                Answers
              </S.BtnLink>
            )}
            <S.BtnLink
              as={'button'}
              style={{ border: 'none', background: 'none', textAlign: 'inherit' }}
              onClick={() => {
                setShareModal(true);
                setIsModalOpen(false);
              }}
            >
              Share
            </S.BtnLink>
          </>
        )}

        {user && (
          <S.ExitBtn
            onClick={() => {
              setIsModalOpen(false);
              handleLogout();
            }}
          >
            Logout
          </S.ExitBtn>
        )}
      </S.Container>
    </WindowBlur>
  );
};

export default Modal;
