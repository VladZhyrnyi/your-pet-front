import LoginForm from 'components/LoginForm/LoginForm';
import { SuccessModal } from 'components/SuccessModal/SuccessModal';

import { useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isVerifiedModalshown = Boolean(searchParams.get('verified'));

  return (
    <div>
      <LoginForm />
      {isVerifiedModalshown && (
        <SuccessModal
          onClose={() => setSearchParams(searchParams.delete('verified'))}
        />
      )}
    </div>
  );
};

export default LoginPage;
