import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;
  z-index: 5;

  display: flex;
  flex-direction: column;

  width: 240px;
  height: 340px;
  padding: 20px;

  background-color: #fff;
  border: 1px solid #000;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 240px;
    overflow: auto;
`;
