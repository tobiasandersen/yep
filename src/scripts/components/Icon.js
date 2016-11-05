import React, { PropTypes } from 'react'

const Icon = ({ 
  glyph, 
  styles = {
    position: 'relative'
  }, 
  height = 16,
  width = 16
}) => (
  <svg style={styles} width={width} height={height}>
    <use xlinkHref={glyph} />
  </svg>
)

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  styles: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number
}

export default Icon
