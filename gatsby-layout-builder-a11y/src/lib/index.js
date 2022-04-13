/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import AccessibilityBlock from './nu_modules/block-builder/AccessibilityBlock'

const Accessibility = ({ opt }) => {
  return <AccessibilityBlock opt={opt} />
}

export default Accessibility
