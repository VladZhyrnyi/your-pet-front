import Main from 'components/Main/Main';
import MyComponent from 'components/myDumbComponent';

const MainPage = props => {
  return (
    <div>
      <MyComponent />
      <Main />
    </div>
  );
};

export default MainPage;
