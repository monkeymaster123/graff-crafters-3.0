import React from 'react'

const Header = ({ data }) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${
        !!data.image.childImageSharp
          ? data.image.childImageSharp.fluid.src
          : data.image
      })`,
      backgroundPosition: `center bottom`,
      backgroundAttachment: `fixed`
    }}
  >
    <div
      style={{
        display: 'flex',
        height: '150px',
        lineHeight: '1',
        justifyContent: 'space-around',
        alignItems: 'left',
        flexDirection: 'column'
      }}
    >
      <h1
        className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
        style={{
          textAlign: 'center',
          boxShadow: '#05981A 0.5rem 0px 0px, #05981A -0.5rem 0px 0px',
          backgroundColor: '#05981A',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {data.title}
      </h1>
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          textAlign: 'center',
          boxShadow: '#05981A 0.5rem 0px 0px, #05981A -0.5rem 0px 0px',
          backgroundColor: '#05981A',
          color: 'white',
          lineHeight: '1',
          padding: '0.25em'
        }}
      >
        {data.subtitle}
      </h3>
    </div>
  </div>
)

export default Header
