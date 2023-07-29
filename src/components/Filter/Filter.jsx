// import { ButtonAddPet } from 'components/Buttons';
import { ButtonFilterWrapper, ButtonNoticeAdd, ButtonNoticeFilter, IconAdd, IconFilter } from 'components/NoticesCategoriesNav/NoticesCategoriesNav.styled';
import React, { useEffect, useState } from 'react'

const Filter = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ButtonFilterWrapper>
      {viewportWidth >= 768 && (
        <>
          <ButtonNoticeFilter>
            Filter <IconFilter />
          </ButtonNoticeFilter>
          {/* <ButtonNoticeAdd>
            Add Pet <IconAdd />
          </ButtonNoticeAdd> */}
        </>
      )}
      {viewportWidth < 768 && (
        <>
          <ButtonNoticeFilter>
            <IconFilter />
          </ButtonNoticeFilter>
          {/* <ButtonAddPet></ButtonAddPet> */}
        </>
      )}
    </ButtonFilterWrapper>
  );
}

export default Filter