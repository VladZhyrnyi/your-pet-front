import React from 'react';

import { NavLink } from 'react-router-dom';
import { NavPageContainer, PageItem, PageList } from './NavPage.styled';

const pageItems = ['News','Find pet','Our friends']



export const NavPage = () => {
  return (
    <NavPageContainer>
      <PageList>
      {/* {pageItems.map(page => */}
        <PageItem
        //  key={page}
        >
          <NavLink to="/news" >
           {/* {page} */}News
          </NavLink>
        </PageItem>
         {/* )}  */}
        <PageItem>
          {' '}
          <NavLink
            to="/notices"
           
          >
            Find pet
          </NavLink>
        </PageItem>{' '}
        <PageItem>
          <NavLink
            to="/friends"
           
          >
            Our friends
          </NavLink>
        </PageItem> 
      </PageList>
    </NavPageContainer>
  );
};
