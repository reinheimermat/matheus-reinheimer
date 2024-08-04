import { gql, GraphQLClient } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql'
const token = process.env.GITHUB_TOKEN

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})

const query = gql`
  {
    viewer {
      login
      starredRepositories(first: 10) {
        nodes {
          name
          url
          description
          openGraphImageUrl
        }
      }
      issues(first: 10) {
        nodes {
          title
          url
        }
      }
    }
  }
`

export const fetchGitHubData = async () => {
  try {
    const data = await client.request(query)
    console.log(JSON.stringify(data, undefined, 2))
  } catch (error) {
    console.error(error)
  }
}
