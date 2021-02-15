export default {
    LANGUAGE: 'en',
    GITHUB_TOKEN: '19e289f885a8dc54b78cc4bddf25a55141f31a61',
    GITHUB_API_URL: 'https://api.github.com/graphql',
    GITHUB_SEARCH_QUERY(query: string, after?: string | null, before?: string | null): string {
        return (
            `query {
			search(type: REPOSITORY, query: "${query}", first: 10, after: ` +
            (after ? `"${after}"` : 'null') +
            `, before: ` +
            (before ? `"${before}"` : 'null') +
            `) {
				repositoryCount
				pageInfo {
				  hasNextPage
				  hasPreviousPage
				  endCursor
				  startCursor
				}
				edges {
				    node {
						... on Repository {
					  		defaultBranchRef {
								target {
						  			... on Commit {
										history(first: 5) {
							  				edges {
												node {
								  					... on Commit {
														abbreviatedOid
														author {
									  						name
														}
														committedDate
								  					}
												}
							  				}
										}
						  			}
								}
					  		}
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
        )
    },
}
