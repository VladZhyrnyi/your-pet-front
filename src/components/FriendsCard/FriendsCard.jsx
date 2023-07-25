// import PropTypes from 'prop-types';

import {
  FriendCard,
  FriendName,
  FriendBoxInfo,
  FriendInfo,
  FriendIcon,
} from './FriendsCard.styled';
import DEFAULT_FOTO from '../../images/200x300 zahlushka foto.png';

const FriendsCard = ({
  title,
  workDays,
  address,
  email,
  phone,
  url,
  image,
  addressUrl,
}) => {
  return (
    <FriendCard>
      <a href={url} rel="nofollow noopener noreferrer">
        <FriendName>{title}</FriendName>
      </a>

      <FriendBoxInfo>
        <FriendIcon>
          <img src={image ? image : DEFAULT_FOTO} alt={title} />
        </FriendIcon>

        <FriendInfo>
          <h4>Time:</h4>
          <p>workDays</p>
          <h4>Address</h4>
          <a href={addressUrl} rel="nofollow noopener noreferrer">
            {address !== '' ? address : 'website only'}
          </a>
          <h4>Email:</h4>
          <a href={`mailto:${email}`}>{email !== '' ? email : 'call us'}</a>
          <h4>Phone:</h4>
          <a href={`tel:${phone}`}>
            {phone !== '' ? phone : 'send us an email'}
          </a>
        </FriendInfo>
      </FriendBoxInfo>
    </FriendCard>
  );
};

// FriendsCard.propTypes = {
// title: PropTypes.string.isRequired ,
// workDays: PropTypes.string.isRequired ,
// address: PropTypes.string.isRequired ,
// email: PropTypes.string.isRequired ,
// phone: PropTypes.string.isRequired ,
// url: PropTypes.string.isRequired ;
//   }

export default FriendsCard;
