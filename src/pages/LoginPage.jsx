import LoginForm from 'components/LoginForm/LoginForm';
import Modal from 'components/Modal/Modal';

import { useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isVerifiedModalshown = Boolean(searchParams.get('verified'));

  return (
    <div>
      <LoginForm />
      {isVerifiedModalshown && (
        <Modal
          closeModal={() => setSearchParams(searchParams.delete('verified'))}
        >
          Verified
        </Modal>
      )}
    </div>
  );
};

export default LoginPage;
