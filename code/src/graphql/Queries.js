import { gql } from '@apollo/client';

export const LOAD_REVIEWS = gql`
  query {
    getAllReviews {
      id
      name
      age
      photo_url
      review
    }
  }
`;
