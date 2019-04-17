import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from '../components/posts';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `developer`, `react`]} />
    <h1>My Blog</h1>
    <p>Welcome to this new blog.</p>
    <p>Time to build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Posts />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
