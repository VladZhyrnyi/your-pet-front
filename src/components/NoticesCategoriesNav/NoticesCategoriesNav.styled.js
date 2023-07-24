import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    margin-top: 43px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 205px;
  flex-wrap: wrap;
  gap: 8px;

  @media (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
    width: 319px;
  }

  @media (min-width: 1280px) {
    width: 319px;
    width: auto;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 8px 16px;
  height: 35px;
  padding: 8px 16px;
  border-radius: 40px;
  background: #cce4fb;

  color: #54adff;
  font-family: Manrope500;
  font-size: 14px;
  letter-spacing: 0.56px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ButtonFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  width: 80px;

  @media (min-width: 768px) {
    gap: 12px;
    width: auto;
  }
  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const ButtonFilter = styled.button`
  display: flex;
  flex-direction: column-reverse;

  height: 40px;

  align-items: center;
  justify-content: center;
  gap: 4px;

  width: ${({ width }) => width || 'auto'};
  border: none;

  padding: 0;

  border-radius: 100%;
  background: ${({ background }) => background};

  color: ${({ color }) => color};
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  /* @media (max-width: 767px) {
  background: linear-gradient(315deg, #419ef1, #9bd0ff);
  } */

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 8px 16px;
    height: 35px;

    border: 2px solid #54adff;

    font-size: 16px;
    font-weight: 700;
    border-radius: 40px;
    letter-spacing: 0.56px;
  }
`;

export const Div = styled.div`
  position: absolute;
  bottom: 20px;
`;
