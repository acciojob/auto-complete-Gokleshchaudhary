import React from 'react';
import App from './App'; // ✅ Make sure this matches location of App.js
import { mount } from 'cypress/react';

describe('testing auto complete', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('testing tags on initial render', () => {
    cy.get('.search').should('exist');
  });
});
