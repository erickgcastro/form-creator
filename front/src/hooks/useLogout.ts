import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useUserContext } from 'src/context';

/**
 * @returns A function that removes the cookie, sets the user to undefined, and redirects to the home
 * page.
 */
export const useLogout = () => {
  const { setUser } = useUserContext({ secret: true });
  const router = useRouter();

  return () => {
    Cookies.remove('ACS_TOKEN');
    setUser(undefined);
    router.push('/');
  };
};

export default useLogout;
