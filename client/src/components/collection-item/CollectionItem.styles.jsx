import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CollectionItemContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 22vw;
  height: 350px;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 255px;

  display: none;

  width: 80%;

  opacity: 0.7;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;

  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 5%;

  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
