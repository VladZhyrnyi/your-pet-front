// import PropTypes from 'prop-types';

import FriendsCard from '../FriendsCard/FriendsCard';
import { ListFriends } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(friend => (
        <FriendsCard
          key={friend.title}
          title={friend.title}
          workDays={friend.workDays}
          address={friend.address}
          email={friend.email}
          phone={friend.phone}
          url={friend.url}
          image={friend.imageUrl}
          addressUrl={friend.addressUrl}
        />
      ))}
    </ListFriends>
  );
};

// PageTitle.propTypes = {
//    friends: PropTypes.array.isRequired,
//   }

export default FriendsList;
