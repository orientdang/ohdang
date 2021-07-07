import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    const renderBlogs = () => {
        const filtered_data = data.allFile.nodes.filter(
            (node) => node.ext === '.md'
        )
        return filtered_data.map((node) => {
            return (
                <li key={node}>
                    <Link to={`/${node.name}`}>{node.name}</Link>
                </li>
            )
        })
    }

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>{renderBlogs()}</ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
                ext
            }
        }
    }
`

export default BlogPage
