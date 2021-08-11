import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const LinkContainer = styled(Link)`
  align-self: flex-start;

  margin-bottom: 25px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: grey;
  }

  @media screen and (max-width: 800px) {
    align-self: center;
  }
`;

export const TitleContainer = styled.h2`
  margin: 0;
  font-size: 28px;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
