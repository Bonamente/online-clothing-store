import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 100px;
  padding: 15px 0;

  font-size: 20px;

  border-bottom: 1px solid #a9a9a9;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextForScreenReader = styled.span`
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

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 5px;
  }
`;

export const QuantityControlButtonContainer = styled.button`
  width: 15px;
  height: 25px;
  padding: 0;

  border: none;
  background: none;

  cursor: pointer;
`;

export const RemoveButtonContainer = styled.button`
  width: 25px;
  height: 25px;
  padding: 0;
  margin-left: 12px;

  font-size: 20px;

  border: none;
  background: none;

  cursor: pointer;
`;
