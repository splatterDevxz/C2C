/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MessengerCustomerChat from 'react-messenger-customer-chat'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return ( 
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        
        <main>
          { children  } 
        </main>

        <MessengerCustomerChat
          pageId="118234263430713"
          appId="1412881125580881"
        />

      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
