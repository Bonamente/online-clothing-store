import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border: none;
  background-color: unset;

  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    bottom: 12px;

    font-size: 10px;
    font-weight: bold;
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
