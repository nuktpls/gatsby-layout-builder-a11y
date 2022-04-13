import React from 'react'
import Accessibility from 'gatsby-layout-builder-a11y'
const IndexPage = props => (
  <>
    <Accessibility
      opt={{
        accessibility: {
          to: '/accessibility',
          label: 'Acessibilidade Primeiro',
        },
        navigation: {
          to: '/#site-navigation',
          label: 'Ir para o menu de navegação',
        },
        content: {
          to: '/#site-content',
          label: 'Ir para o conteúdo',
        },
      }}
    />
    oi
  </>
)

export default IndexPage
