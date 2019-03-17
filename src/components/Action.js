import React from 'react'

const Primary = ({ data }) => (
  <div>
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="tile">
                <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
                  {data.heading}
                </h1>
              </div>
              <div className="tile">
                <h3>{data.description}</h3>
              </div>
              <div className="tile">
                <a
                  style={{ marginLeft: 0 }}
                  href={data.link}
                  class="button is-primary"
                >
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
