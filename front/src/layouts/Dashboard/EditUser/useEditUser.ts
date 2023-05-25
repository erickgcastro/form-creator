import { useUserContext } from 'src/context';
import { useState } from 'react';
import { AxiosApi } from 'src/services';
import toast from 'react-hot-toast';
import { ThrowToastError } from 'src/services';

function useEditUser(imageRef: any) {
  const { setUser } = useUserContext({ secret: true });
  const [changePass, setChangePass] = useState(false);
  const [form, setForm] = useState({
    image: '',
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
  });

  const toggleOptionChangePass = () => {
    setChangePass((state) => !state);
    setForm((state) => ({ ...state, newPassword: '', currentPassword: '' }));
  };

  const handleChangeFormInput = (e: any) => {
    const name = e.target ? e.target.name : 'image';
    let value = e.target ? e.target.value : e;
    setForm((pvState) => ({ ...pvState, [name]: value }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in form) {
      type FormKeys = keyof typeof form;
      if (form[key as FormKeys]) {
        formData.append(key, form[key as FormKeys]);
      }
    }

    await AxiosApi().patch('users', formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    })
      .then(({ data }) => {
        setUser(data);
        toast.success('Success');
      })
      .catch((error) => {
        console.error(error);
        ThrowToastError(error);
      });
  };

  return {
    changePass,
    form,
    handleSubmit,
    handleChangeFormInput,
    toggleOptionChangePass,
  };
}

export default useEditUser;
