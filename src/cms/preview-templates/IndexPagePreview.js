import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryDetails = entry.getIn(['data', 'details', 'list'])
  const details = entryDetails ? entryDetails.toJS() : []

  return (
    <IndexPageTemplate
      header={entry.getIn(['data', 'header'])}
      primary={entry.getIn(['data', 'primary'])}
      details={details}
      action={entry.getIn(['data', 'action'])}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
