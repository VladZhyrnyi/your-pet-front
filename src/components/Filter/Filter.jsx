import {
  ButtonFilterWrapper,
  ButtonNoticeFilter,
  IconFilter,
} from 'components/NoticesCategoriesNav/NoticesCategoriesNav.styled';
import useWindowWidth from 'hooks/useWindowWidth';

const Filter = () => {
  const width = useWindowWidth();

  const isMobile = width < 768;

  return (
    <ButtonFilterWrapper>
      {!isMobile && (
        <>
          <ButtonNoticeFilter>
            Filter
            <IconFilter />
          </ButtonNoticeFilter>
        </>
      )}
      {isMobile && (
        <>
          <ButtonNoticeFilter>
            <IconFilter />
          </ButtonNoticeFilter>
        </>
      )}
    </ButtonFilterWrapper>
  );
};

export default Filter;
