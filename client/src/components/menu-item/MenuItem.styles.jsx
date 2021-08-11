import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItemContainer = styled(Link)`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;

  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  margin: 0 7.5px 15px;

  border: 1px solid #000;

  overflow: hidden;

  &:focus,
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 90px;
  padding: 0 25px;

  background-color: #fff;
  border: 1px solid #000;
  opacity: 0.7;
`;

export const ContentTitle = styled.h3`
  margin: 0;
  margin-bottom: 6px;

  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.p`
  margin: 0;

  font-weight: lighter;
  font-size: 16px;
`;
