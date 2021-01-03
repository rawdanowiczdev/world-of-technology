export interface Article {
  title: string;
  image: { __typename: string; url: string };
  text: string;
  articleCategory: string;
}
