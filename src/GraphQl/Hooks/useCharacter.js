import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });
  console.log(error, loading, data);
  return {
    error,
    loading,
    data,
  };
};
