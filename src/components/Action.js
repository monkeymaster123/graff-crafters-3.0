import React from 'react'

const Primary = ({ data }) => (
  <section
    className="section section--gradient"
    style={{ backgroundColor: 'lilac' }}
  >
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
                  <a href={data.link} class="button is-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Primary
