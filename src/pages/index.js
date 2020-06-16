import React from "react"
import Link from "gatsby-link"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import Counter from "./Counter"

export default function Home({data}) {
  return (
      <Layout>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>This is a paragraph</p>
        <Link to="/page-2/">Page 2</Link>
        <br />
        <Link to="/dir1/page-3/">Page 3</Link>
        <br />
        <Counter color="blue" />
      </Layout>
  )
}

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
