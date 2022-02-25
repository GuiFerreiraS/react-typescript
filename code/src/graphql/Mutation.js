import { gql } from '@apollo/client';

export const CREATE_REVIEW_MUTATION = gql`
  mutation createReview(
    $name: String!
    $age: Int!
    $photo_url: String!
    $review: String!
  ) {
    createReview(
      name: $name
      age: $age
      photo_url: $photo_url
      review: $review
    ) {
      id
    }
  }
`;
