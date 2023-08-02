import FriendsList from 'components/FriendsList/FriendsList';
import PageTitle from './../components/PageTitle/PageTitle';
import friends from '../friends.json';

const OurFriendsPage = props => {
  return (
    <>
      <PageTitle text="Our friends" />
      <FriendsList friends={friends} />
    </>
  );
};

export default OurFriendsPage;
