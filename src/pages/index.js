import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"
import Counter from "./Counter"

export default function Home() {
  return (
      <Layout>
        <h1>Hello world</h1>
        <p>This is a paragraph</p>
        <Link to="/page-2/">Page 2</Link>
        <br />
        <Link to="/dir1/page-3/">Page 3</Link>
        <br />
        <Counter color="blue" />
      </Layout>
  )
}
