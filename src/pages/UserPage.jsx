import PetsData from 'components/PetsData/PetsData';
import UserData from 'components/UserData/UserData';
import { UserPageWrap } from 'components/UserData/UserData.styled';

const UserPage = props => {
  return (
    <UserPageWrap>
      <UserData />
      <PetsData />
    </UserPageWrap>
  );
};

export default UserPage;
