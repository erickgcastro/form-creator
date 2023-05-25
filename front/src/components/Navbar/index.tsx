import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserContext } from 'src/context';
import type { TypesNavbar } from 'src/types';

import AuthBtns from '../AuthBtns';
import NavModal from './NavModal';
import ShareModal from '../ShareModal';
import Hamburguer from './Hamburguer';
import * as S from './styles';

const Navbar = ({ page, redirect, blockUser = 0 }: TypesNavbar) => {
  const [toggleNavModal, setToggleNavModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState(false);
  const { user } = useUserContext({});
  const { query } = useRouter();

  return (
    <>
      {shareModal && <ShareModal closeModal={setShareModal} slug={String(query.slug)} />}

      <S.Container>
        <div className='main'>
          <S.Logo translate='no'>LOGO</S.Logo>
          {user && <Hamburguer {...{ page, redirect, blockUser, setShareModal }} />}

          <S.Buttons>
            {user && (
              <S.StyledLink href='/dashboard' checked={page === 'dashboard'}>
                Dashboard
              </S.StyledLink>
            )}

            {(page === 'dashboard' || page === 'edit') && (
              <S.StyledLink href='/dashboard/edit-user' checked={page === 'edit'}>
                Edit user
              </S.StyledLink>
            )}

            {query.slug && (
              <>
                <S.StyledLink
                  href={`/forms/${query.slug}`}
                  checked={page === 'questions'}
                >
                  Questions
                </S.StyledLink>

                {blockUser === user?.id && (
                  <S.StyledLink
                    href={`/forms/${query.slug}/answers`}
                    checked={page === 'answers'}
                  >
                    Answers
                  </S.StyledLink>
                )}

                <S.StyledLink onClick={() => setShareModal(true)}>Share</S.StyledLink>
              </>
            )}
          </S.Buttons>

          {!user && <AuthBtns redirect={redirect} />}

          {user && (
            <S.UserArea onClick={() => setToggleNavModal((state) => !state)}>
              {toggleNavModal && <NavModal closeModal={setToggleNavModal} />}
              <S.UserImage>
                <Image
                  src={user.image || '/user.png'}
                  layout='fixed'
                  objectPosition='bottom'
                  objectFit='cover'
                  alt='user image'
                  height={30}
                  width={30}
                  quality={100}
                />
              </S.UserImage>
              <S.UserName>{user?.name.split(' ')[0].substring(0, 15)}</S.UserName>
              <span className='material-icons' translate='no'>
                expand_more
              </span>
            </S.UserArea>
          )}
        </div>
      </S.Container>
    </>
  );
};

export default Navbar;
