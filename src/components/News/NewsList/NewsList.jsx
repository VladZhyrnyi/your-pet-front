import NewsCard from '../NewsCard';
import { List } from './NewsList.styled';

const NewsList = ({news}) => {
  return (
    <List>
      {news.map(article => {
        return (
          <li key={article._id}>
            <NewsCard article={article}/>
          </li>             
        )
      })}
    </List>
  );
};

export default NewsList;