import { LoadingContainer } from './styles';
import Loading from 'src/components/Loading';
import { FormCard } from 'src/components/Form';

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <span>Loading...</span>
      <Loading />
    </LoadingContainer>
  );
};

export default LoadingPage;
