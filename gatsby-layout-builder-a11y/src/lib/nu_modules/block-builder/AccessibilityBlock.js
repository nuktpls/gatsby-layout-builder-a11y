import React from 'react'
import { Link } from 'gatsby'

const AccessibilityResolver = ({ opt }) => {
  if (!opt) {
    return console.log('No opt in gatsby-layout-builder-a11y-shortcuts')
  }
  return (
    <>
      {opt.accessibility ? (
        <Link
          data-trackable="a11y-skip-to-help"
          className="non-layout"
          to={opt.accessibility.to || '/accessibility'}
          tabIndex="0"
        >
          {opt.accessibility.label}
        </Link>
      ) : null}

      {opt.navigation ? (
        <Link
          data-trackable="a11y-skip-to-navigation"
          className="non-layout"
          to={opt.navigation.to || '/#site-navigation'}
          tabIndex="0"
        >
          {opt.navigation.label}
        </Link>
      ) : null}

      {opt.content ? (
        <Link
          data-trackable="a11y-skip-to-content"
          className="non-layout"
          to={opt.content.to || '/#site-content'}
          tabIndex="0"
        >
          opt.content.label
        </Link>
      ) : null}

      {opt.footer.to ? (
        <Link
          data-trackable="a11y-skip-to-footer"
          className="non-layout"
          to={opt.footer.to || '/#site-footer'}
          tabIndex="0"
        >
          {opt.footer.label}
        </Link>
      ) : null}
    </>
  )
}
export default AccessibilityResolver
