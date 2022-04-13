import React from 'react'
import { Link } from 'gatsby'

const AccessibilityResolver = ({ opt }) => {
  if (!opt) {
    return console.log('No opt in gatsby-layout-builder-a11y-shortcuts')
  }
  if (!opt.accessibility) {
    opt.accessibility = {
      to: '/accessibility',
      label: 'Acessibilidade',
    }
  }
  if (!opt.navigation) {
    opt.navigation = {
      to: '/#site-navigation',
      label: 'Ir para o menu de navegação',
    }
  }
  if (!opt.content) {
    opt.content = {
      to: '/#site-content',
      label: 'Ir para o conteúdo',
    }
  }
  if (!opt.footer) {
    opt.footer = {
      to: '/#site-footer',
      label: 'Ir para o rodapé',
    }
  }
  return (
    <>
      {opt.accessibility ? (
        <Link
          data-trackable="a11y-skip-to-help"
          className="non-layout"
          to={opt.accessibility.to}
          tabIndex="0"
        >
          {opt.accessibility.label}
        </Link>
      ) : null}

      <Link
        data-trackable="a11y-skip-to-navigation"
        className="non-layout"
        to={opt.navigation.to || '/#site-navigation'}
        tabIndex="0"
      >
        {opt.navigation.label}
      </Link>

      <Link
        data-trackable="a11y-skip-to-content"
        className="non-layout"
        to={opt.content.to || '/#site-content'}
        tabIndex="0"
      >
        opt.content.label
      </Link>

      <Link
        data-trackable="a11y-skip-to-footer"
        className="non-layout"
        to={opt.footer.to || '/#site-footer'}
        tabIndex="0"
      >
        {opt.footer.label}
      </Link>
    </>
  )
}
export default AccessibilityResolver
