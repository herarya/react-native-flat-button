import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types';

export const staticPropTypes = {
  ...TouchableOpacity.propTypes,
  type: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  shadowHeight: PropTypes.number,
  borderLeftWidth: PropTypes.number,
  borderRightWidth: PropTypes.number,
  activeOpacity: PropTypes.number,
  containerStyle: View.propTypes.style,
  contentStyle: Text.propTypes.style
}

export const staticDefaultProps = {
  borderRadius: 8,
  shadowHeight: 4,
  activeOpacity: 0.9,
  backgroundColor: '#34495e',
  borderColor: '#2c3e50',
  borderLeftWidth: 0.5,
  borderRightWidth: 0.5
}
