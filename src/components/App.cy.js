// src/components/App.cy.js

import React from 'react';
import App from './App'; // ✅ correct if same folder
import { mount } from 'cypress/react';

describe('testing auto complete', () => {
  beforeEach(() => {
    mount(<App />);
  });

  it('testing tags on initial render', () => {
    cy.get('.search').should('exist');
  });
});
