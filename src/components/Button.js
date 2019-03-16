import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, bg, onClick }) => {
  return (
    <button style={{ background: bg }} onClick={onClick} >
    {text}
  </button>
  )
}

Button.defaultProps = {
  bg: '',
  onClick: () => {}
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string,
  onClick: PropTypes.func
}

export default Button