import LoginForm from 'components/LoginForm/LoginForm';
import { MainWrap } from 'components/Main/Main.styled';
import { SuccessModal } from 'components/SuccessModal/SuccessModal';
import { useSearchParams } from 'react-router-dom';

const LoginPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isVerifiedModalshown = Boolean(searchParams.get('verified'));

  return (
    <MainWrap>
      <LoginForm />
      {isVerifiedModalshown && (
        <SuccessModal
          onClose={() => setSearchParams(searchParams.delete('verified'))}
        />
      )}
    </MainWrap>
  );
};

export default LoginPage;
