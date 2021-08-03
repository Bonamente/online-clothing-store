import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100%;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
