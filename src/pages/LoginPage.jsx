import LoginForm from 'components/LoginForm/LoginForm';
import Modal from 'components/Modal/Modal';
import { MainWrap } from 'components/Main/Main.styled';

import { useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isVerifiedModalshown = Boolean(searchParams.get('verified'));

  return (
    <MainWrap>
      <LoginForm />
      {isVerifiedModalshown && (
        <Modal
          closeModal={() => setSearchParams(searchParams.delete('verified'))}
        >
          Verified
        </Modal>
      )}
    </MainWrap>
  );
};

export default LoginPage;
