import { useRef, useState } from 'react';
import Image from 'next/image';
import useEditUser from './useEditUser';

import Navbar from 'src/components/Navbar';
import { CardContainer, FormCard } from 'src/components/Form';
import * as S from './styles';
import { useUserContext } from 'src/context';

const EditUser = () => {
  const { user } = useUserContext({});
  const imageRef = useRef<any>(null);
  const [currentImage, setCurrentIamge] = useState<string>();
  const {
    changePass,
    form,
    handleChangeFormInput,
    toggleOptionChangePass,
    handleSubmit,
  } = useEditUser(imageRef);

  const handleSelectImage = () => imageRef.current && imageRef.current.click();

  return (
    <>
      <Navbar page='edit' />
      <CardContainer>
        <FormCard>
          <S.EditArea>
            <S.ImageArea>
              <input
                type='file'
                ref={imageRef}
                accept='image/*'
                size={1000000}
                style={{ display: 'none' }}
                name='image'
                onChange={(e) => {
                  if (!e.target.files || !e.target) return;
                  setCurrentIamge(URL.createObjectURL(e.target.files[0]));
                  handleChangeFormInput(e.target.files[0]);
                }}
              />
              <S.BtnUploadImage onClick={handleSelectImage}>
                Upload image
                <span className='material-icons' translate='no'>
                  add
                </span>
              </S.BtnUploadImage>
              <S.UserImage>
                <Image
                  src={currentImage || '/user.png'}
                  objectPosition='top'
                  objectFit='contain'
                  alt='user image'
                  height={140}
                  width={140}
                  quality={100}
                />
              </S.UserImage>
            </S.ImageArea>
            <div style={{ width: '100%' }}>
              <div style={{ marginBottom: '15px' }}>
                <S.FieldTitle>Name</S.FieldTitle>
                <S.InputText
                  type='text'
                  name='name'
                  placeholder={user?.name}
                  autoComplete='off'
                  onChange={handleChangeFormInput}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <S.FieldTitle>Email</S.FieldTitle>
                <S.InputText
                  type='text'
                  name='email'
                  placeholder={user?.email}
                  autoComplete='off'
                  onChange={handleChangeFormInput}
                />
              </div>

              {changePass && (
                <>
                  <div style={{ marginBottom: '15px' }}>
                    <S.FieldTitle>Current password</S.FieldTitle>
                    <S.InputText
                      type='text'
                      name='currentPassword'
                      autoComplete='off'
                      onChange={handleChangeFormInput}
                    />
                  </div>
                  {form.currentPassword && (
                    <div>
                      <S.FieldTitle>New password</S.FieldTitle>
                      <S.InputText
                        type='text'
                        name='newPassword'
                        autoComplete='off'
                        onChange={handleChangeFormInput}
                        focus
                      />
                    </div>
                  )}
                </>
              )}

              <S.BtnsArea>
                <S.BtnChangePass onClick={toggleOptionChangePass}>
                  {changePass ? 'Cancel' : 'Change password'}
                </S.BtnChangePass>
                <S.ButtonSubmit onClick={handleSubmit}>Edit user</S.ButtonSubmit>
              </S.BtnsArea>
            </div>
          </S.EditArea>
        </FormCard>
      </CardContainer>
    </>
  );
};

export default EditUser;
