import React from "react"
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"


export default function Home({data}) {
  return (
      <Layout>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }) => 
                <tr>
                  <td>
                    {node.relativePath}
                  </td>
                  <td>
                    {node.prettySize}
                  </td>
                  <td>
                    {node.extension}
                  </td>
                  <td>
                    {node.birthTime}
                  </td>
                </tr>
            )}
          </tbody>
        </table>
        <Link to="/page-2/">Page 2</Link>
        <br />
        <Link to="/dir1/page-3/">Page 3</Link>
        <br />
        <Link to="/Counter/">Counter</Link>
      </Layout>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
