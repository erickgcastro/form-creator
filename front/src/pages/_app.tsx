import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from 'src/styles/stitches.config';
import { AppPropsWithLayout } from 'src/types';
import { UserProvider } from 'src/context';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  GlobalStyles();
  return (
    <UserProvider>
      <Toaster position='top-center' reverseOrder={true} />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
