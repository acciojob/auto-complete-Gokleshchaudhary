import React from 'react';
import App from './App'; // ✅ 'App.js' is in the same folder
import { mount } from 'cypress/react';

describe('testing auto complete', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('testing tags on initial render', () => {
    cy.get('.search').should('exist');
  });
});
