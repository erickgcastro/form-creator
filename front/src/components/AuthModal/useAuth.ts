import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRemoveBodyScroll } from 'src/hooks';
import { AxiosApi, ThrowToastError } from 'src/services';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { useUserContext } from 'src/context';

const useAuth = (page: boolean, closeModal: any, redirect?: string) => {
  useRemoveBodyScroll();
  const { setUser } = useUserContext({});
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<boolean>(page || false); // false = login; true = signup
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChangeInput = (e: any) => {
    const name = e.target.name;
    let value = e.target.value;
    setForm((pvState) => ({ ...pvState, [name]: value }));
  };

  const togglePage = () => {
    setForm({ name: '', email: '', password: '' });
    setCurrentPage((state) => !state);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const route = currentPage ? 'signup' : 'signin';
    try {
      const { data } = await AxiosApi().post(`auth/${route}`, form);
      setUser(data.user);
      Cookies.set('ACS_TOKEN', data.token, { expires: 30 });
      if (redirect) {
        router.push(redirect);
      } else {
        // location.reload();
      }
      closeModal();
      setLoading(false);
      toast.success('Success');
    } catch (error) {
      setLoading(false);
      ThrowToastError(error);
    }
  };

  return {
    form,
    currentPage,
    loading,
    handleChangeInput,
    togglePage,
    handleSubmit,
  };
};

export default useAuth;
