// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  FriendCard,
  FriendName,
  FriendBoxInfo,
  FriendInfo,
  FriendIcon,
  FriendTimeWork,
  FriendTimeThumb,
  FriendInfoTitle,
  FriendLink,
  Days,
  TimeWork,
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
  const daysWeek = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  const timeWork = () => {
    let day;

    if (workDays) {
      for (const workDay of workDays) {
        const { isOpen, from, to } = workDay;

        if (isOpen) {
          day = { isOpen, from, to };
        }
      }
    }

    return day;
  };
  const time = timeWork();

  return (
    <FriendCard>
      <a href={url} rel="nofollow noopener noreferrer" target="_blank">
        <FriendName>{title}</FriendName>
      </a>

      <FriendBoxInfo>
        <FriendIcon>
          <img src={image ? image : DEFAULT_FOTO} alt={title} />
        </FriendIcon>

        <FriendInfo>
          <FriendInfoTitle>Time:</FriendInfoTitle>
          <FriendTimeWork>
            {workDays ? `${time.from}-${time.to}` : <p>day and night</p>}

            {workDays && (
              <FriendTimeThumb>
                {workDays.map((workDay, index) => (
                  <TimeWork key={nanoid()}>
                    <Days>{daysWeek[index]}</Days>
                    {workDay.isOpen
                      ? `${workDay.from}-${workDay.to}`
                      : 'cllose'}
                  </TimeWork>
                ))}
              </FriendTimeThumb>
            )}
          </FriendTimeWork>

          <FriendInfoTitle>Address</FriendInfoTitle>
          <FriendLink
            href={addressUrl}
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            {address ? address : <p>website only</p>}
          </FriendLink>
          <FriendInfoTitle>Email:</FriendInfoTitle>
          <FriendLink href={`mailto:${email}`}>
            {email ? email : <p>call us</p>}
          </FriendLink>
          <FriendInfoTitle>Phone:</FriendInfoTitle>
          <FriendLink href={`tel:${phone}`}>
            {phone ? phone : <p>send us email</p>}
          </FriendLink>
        </FriendInfo>
      </FriendBoxInfo>
    </FriendCard>
  );
};

// FriendsCard.propTypes = {
// title: PropTypes.string.isRequired ,
// workDays: PropTypes.array.isRequired ,
// address: PropTypes.string.isRequired ,
// email: PropTypes.string.isRequired ,
// phone: PropTypes.string.isRequired ,
// url: PropTypes.string.isRequired ;
//   }

export default FriendsCard;
