import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import Banner from "components/banner"
import Partners from "components/partners"
import Services from "components/services"
import Main from "components/main" 
import LowerMain from "components/lower-main"
import Candely from "components/candely"
import MessengerCustomerChat from 'react-messenger-customer-chat';

const IndexPage = () => (	
  <Layout> 
    <SEO title="Home" />
    <Banner/> 
    <Partners/>
    <Services/>
    <Main/>
    <LowerMain/>
    <Candely/>
  </Layout>
)
		
export default IndexPage
					