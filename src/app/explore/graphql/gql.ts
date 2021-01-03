import gql from 'graphql-tag';

export const ARTICLES_QUERY = gql`
  query {
    articles {
      title
      image {
        url
      }
      text
      articleCategory
    }
  }
`;
