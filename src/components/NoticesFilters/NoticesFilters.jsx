// import useWindowWidth from 'hooks/useWindowWidth';

import { FilterWrapper } from './NoticesFilters.styled';
import AddPetBtn from 'components/AddPetBtn/AddPetBtn';

const NoticesFilters = () => {
  // const viewportWidth = useWindowWidth();

  // const isMobile = viewportWidth < 768;

  return (
    <FilterWrapper>
      {/* <ButtonNoticeFilter>
        {!isMobile && 'Filter'}
        <IconFilter />
      </ButtonNoticeFilter> */}
      <AddPetBtn />
    </FilterWrapper>
  );
};

export default NoticesFilters;
