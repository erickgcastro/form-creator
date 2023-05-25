import { useEffect, useState } from 'react';
import { useFormCreator } from 'src/context';

const useShareForm = (urlParam?: string) => {
  const { response } = useFormCreator();
  const [url, setUrl] = useState<string>('');
  const [showMessage, setShowMessage] = useState<boolean>();

  useEffect(() => {
    const param = urlParam || response?.hash
    setUrl(process.env.NEXT_PUBLIC_BASE_URL + '/forms/' + param);
  }, [response, urlParam]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 700);
  };

  return { url, copyToClipboard, showMessage };
};

export default useShareForm;
