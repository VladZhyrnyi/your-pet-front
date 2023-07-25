import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  width: 320px;

  margin-top: 24px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
