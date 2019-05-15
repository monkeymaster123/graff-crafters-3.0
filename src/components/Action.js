import React from 'react'

const Primary = ({ data }) => (
  <div style={{ backgroundColor: '#05981A', color: 'white' }}>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="tile">
                <h1
                  style={{ color: 'white' }}
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                >
                  {data.heading}
                </h1>
              </div>
              <div className="tile">
                <h3 style={{ color: 'white' }}>{data.description}</h3>
              </div>
              <div className="tile" style={{ color: 'white' }}>
                <a style={{ marginLeft: 0 }} href={data.link} class="button">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Primary
