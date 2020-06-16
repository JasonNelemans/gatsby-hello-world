import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"


export default function Page2({data}) {
  return (
      <Layout>
        <h2>This website is written by: {data.site.siteMetadata.title}</h2>
        <Link to="/">Go home</Link>
      </Layout>
  )
}

export const query = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
