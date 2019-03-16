import React from 'react'
import PropTypes from 'prop-types';

const Greet = ({ to }) => <h4>Hello, {to}</h4>

Greet.propTypes = {
  to: PropTypes.string.isRequired
}

export default Greet