import { graphql } from 'gatsby'

export const queryAllFile = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`
