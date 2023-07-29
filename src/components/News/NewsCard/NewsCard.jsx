import formatDate from 'utils/formatDate';
import {
  CardWrapper,
  ImgWrapper,
  Img,
  InfoWrapper,
  DateWrapper,
  Title,
  Text,
  Date,
  NewsLink } from './NewsCard.styled';

const NewsCard = ({article: {imgUrl, title, text, date, url}}) => {
  
  return (
    <CardWrapper>
      <ImgWrapper>
        <Img src={imgUrl} alt={title}/>
      </ImgWrapper>
      <InfoWrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <DateWrapper>
            <Date>{formatDate(date)}</Date>
            <NewsLink href={url} target="_blank" rel="noopener noreferrer">
              Read More
            </NewsLink>
        </DateWrapper>
      </InfoWrapper>
    </CardWrapper>
  )
};

export default NewsCard;