import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const CollectionItemContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 22vw;
  height: 350px;

  &:hover,
  &:focus,
  &:focus-within {
    outline: none;
    .image {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover,
    &:focus {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  position: absolute;
  top: 255px;

  display: none;
  width: 80%;

  opacity: 0.7;

  @media screen and (max-width: 800px) {
    top: 235px;

    display: block;
    min-width: unset;
    padding: 0 10px;

    opacity: 0.9;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;

  object-fit: cover;

  @media screen and (max-width: 800px) {
    height: 85%;
  }
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 5%;

  @media screen and (max-width: 800px) {
    height: 15%;
  }
`;

export const NameContainer = styled.h3`
  margin: 0;
  margin-bottom: 15px;

  font-size: 18px;
`;

export const PriceContainer = styled.p`
  margin: 0;
  text-align: right;

  font-size: 18px;
  font-weight: bold;
`;
