import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Primary from '../components/Primary'
import Action from '../components/Action'

export const IndexPageTemplate = ({ header, primary, details, action }) => (
  <Layout>
    <Header data={header} />
    <Primary data={primary} details={details} />
    <Action data={action} />
  </Layout>
)

IndexPageTemplate.propTypes = {
  header: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string
  }),
  primary: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string,
    description: PropTypes.string
  }),
  details: PropTypes.shape({
    list: PropTypes.array
  }),
  action: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      header={frontmatter.header}
      primary={frontmatter.primary}
      details={frontmatter.details}
      action={frontmatter.action}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        header {
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        primary {
          heading
          subheading
          description
        }
        details {
          list {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        action {
          heading
          description
          link
        }
      }
    }
  }
`
