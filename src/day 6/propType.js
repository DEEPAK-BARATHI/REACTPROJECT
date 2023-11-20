import React from 'react'
import PropTypes from 'prop-types'
export default function PropVal(props) {
  return (
    <div>
        <h1>my name is {props.name}</h1>
    </div>
  )
}

PropVal.propTypes={name:PropTypes.string}
