export default {
    LANGUAGE: 'en',
    TOKEN: '8452d4a87---2cba6f7d588f1f88---883f1d78b00c939',
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
