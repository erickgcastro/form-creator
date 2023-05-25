import Cookies from 'js-cookie';
import axios from 'axios';

// exportando como função para poder pegar o token no momento da requisição
/**
 * It creates an axios instance with a baseURL and a header with a token.
 * @returns An axios instance with the baseURL and Authorization header set.
 */
export const AxiosApi = () => {
  const token = Cookies.get('ACS_TOKEN');
  return axios.create({
    baseURL: String(process.env.NEXT_PUBLIC_API_URL),
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
