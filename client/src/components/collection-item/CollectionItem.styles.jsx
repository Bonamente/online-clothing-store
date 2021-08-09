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

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
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

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;

  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media screen and (max-width: 800px) {
    height: 85%;
  }
`;

export const CollectionFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 5%;

  font-size: 18px;

  @media screen and (max-width: 800px) {
    height: 15%;
  }
`;

export const NameContainer = styled.span`
  margin-bottom: 15px;

  /* @media screen and (max-width: 800px) {
    width: unset;
  } */
`;

export const PriceContainer = styled.span`
  text-align: right;

  /* @media screen and (max-width: 800px) {
    width: unset;
  } */
`;
