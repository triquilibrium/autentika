export default {
    GITHUB_TOKEN: '19e289f885a8dc54b78cc4bddf25a55141f31a61',
    GITHUB_API_URL: 'https://api.github.com/graphql',
    GITHUB_SEARCH_QUERY(query: string): string {
        return `query {
			search(type: REPOSITORY, query: "${query}", first: 10) {
				repositoryCount
				pageInfo {
					hasNextPage
					hasPreviousPage
					endCursor
				}
				edges {
					node {
						... on Repository {
							name
							id
							sshUrl
							url
							owner {
								login
							}
						}
					}
				}
			}
		}`
    },
}
