import { useState } from 'react';
import AuthModal from 'src/components/AuthModal';
import About from './About';
import Header from './Header';
import Services from './Services';
import Welcome from './Welcome';
import Footer from './Footer';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((state) => !state);

  return (
    <>
      {isModalOpen && (
        <AuthModal page={false} redirect='/dashboard' closeModal={toggleModal} />
      )}
      <Header showModal={toggleModal} />
      <Welcome showModal={toggleModal} />
      <Services />
      <About showModal={toggleModal} />
      <Footer />
    </>
  );
};

export default Home;
