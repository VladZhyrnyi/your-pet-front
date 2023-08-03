import styled from 'styled-components';

export const PetList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-bottom: 137px;

  @media screen and (min-width: 768px) {
    margin-bottom: 121px;
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-bottom: 85px;
  }
`;
