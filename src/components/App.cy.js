import React from 'react'
import App from './App' // ✅ Relative import from same folder
import { mount } from 'cypress/react'

describe('App', () => {
  beforeEach(() => {
    mount(<App />)
  })

  it('should display the search input', () => {
    cy.get('.search').should('exist')
  })
})

