import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Banner from "components/banner"
import Partners from "components/partners"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <Partners/>
  </Layout>
)

export default IndexPage
