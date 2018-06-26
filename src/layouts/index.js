import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Portfolio website for Kyle Richardson. A full stack web developer in Seattle, WA.' },
      ]}
    />
    <Header logo={data.logo.sizes} background={data.background.sizes} />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/seattle-web-developer.jpg/" }) {
      sizes(maxWidth: 1240, grayscale: true, maxHeight: 500) {
        ...GatsbyImageSharpSizes
      }
    }
    logo: imageSharp(id: { regex: "/kyle-richardson-web-dev-seattle.png/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
