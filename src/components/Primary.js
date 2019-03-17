import React from 'react'
import Details from '../components/Details'

const Primary = ({ data, details }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <div className="tile">
                  <h1 className="title">{data.heading}</h1>
                </div>
                <div className="tile">
                  <h3 className="subtitle">{data.subheading}</h3>
                </div>
                <div className="tile">
                  <p className="subtitle">{data.description}</p>
                </div>
              </div>
              <Details data={details.list} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Primary
