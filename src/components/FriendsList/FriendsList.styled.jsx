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
  }
`;
