import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"
import Banner from "components/banner"
import Partners from "components/partners"
import Services from "components/services"
import Main from "components/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <Partners/>
    <Services/>
    <Main/>
  </Layout>
)
export default IndexPage
