import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;

  .test-warning ~ button {
    margin-top: 50px;
    margin-left: auto;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0;

  border-bottom: 1px solid #a9a9a9;
`;

export const HeaderBlockContainer = styled.div`
  width: 23%;
  text-transform: capitalize;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;

  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WarningContainer = styled.div`
  margin-top: 40px;

  font-size: 24px;
  text-align: center;
  color: #ff0000;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;


export const TextForScreenReader = styled.h1`
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  overflow: hidden;

  white-space: nowrap;

  border-width: 0;

  clip: rect(0, 0, 0, 0);
`;
