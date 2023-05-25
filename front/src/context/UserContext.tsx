import { AxiosApi, ThrowToastError } from 'src/services';
import { useRouter } from 'next/router';
import {
  useState,
  createContext,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import Cookies from 'js-cookie';

type User = {
  id: number;
  createdAt: string;
  updateAt: string;
  adm: boolean;
  email: string;
  name: string;
  image: string;
};

type TypeUserContext = {
  user: User | undefined;
  userLoading: boolean;
  userFetched: boolean;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setUserLoading: any;
};

export const UserContext = createContext({} as TypeUserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const [userLoading, setUserLoading] = useState(true);
  const [userFetched, setUserFetched] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await AxiosApi().get('users');
        setUser(data);
      } catch (error) {
        // ThrowToastError(error);
      }
      setUserFetched(true);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, userLoading, userFetched, setUserLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

type HookProps = {
  secret?: boolean;
  createdBy?: number;
  redirect?: string;
};

export const useUserContext = ({ secret, redirect, createdBy }: HookProps) => {
  const router = useRouter();
  const context = useContext(UserContext);

  useEffect(() => {
    (async () => {
      if (context.userFetched) {
        const checkUser = createdBy && createdBy !== context.user?.id;
        if ((!context.user && secret) || checkUser) {
          await router.push(redirect || '/');
        }
        context.setUserLoading(false);
      }
    })();
  }, [context, createdBy, redirect, router, secret]);

  return context;
};
