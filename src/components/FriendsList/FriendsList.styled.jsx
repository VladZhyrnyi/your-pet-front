import styled from 'styled-components';

export const ListFriends = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 75px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-top: 40px;
    margin-bottom: 172px;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    margin-bottom: 69px;
  }
`;
