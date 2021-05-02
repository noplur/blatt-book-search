import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            description
            title
            bookId
            image
            link
            authors
        }
      }
      token
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
    user {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            description
            title
            bookId
            image
            link
            authors
        }
      }
    }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook (bookId: $bookId)
    user {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            description
            title
            bookId
            image
            link
            authors
        }
      }
    }
`;