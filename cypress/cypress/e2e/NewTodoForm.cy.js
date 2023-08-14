/* eslint-disable no-undef */
/// <reference types="Cypress" /> 
/* added for autocomplete */
describe('NewTodoForm Component', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should have a form', () => {
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Add todo');
  });

  it('should add a task', () => {
    cy.get('input[type="text"]').type('Learn React').should('have.value', 'Learn React');
    cy.contains('Add todo').click();

    cy.get('li span:first-of-type').should('have.text', 'Learn React');
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('input[type="text"]').type('Learn Redux').should('have.value', 'Learn Redux');
    cy.contains('Add todo').click();

    cy.get('li:last-child span:first-of-type').should('have.text', 'Learn Redux');
    cy.get('input[type="text"]').should('have.value', '');
  });

  it('should delete tasks', () => {
    cy.get('input[type="text"]').type('Learn React').should('have.value', 'Learn React');
    cy.contains('Add todo').click();

    cy.get('li span:first-of-type').should('have.text', 'Learn React');
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('input[type="text"]').type('Learn Redux').should('have.value', 'Learn Redux');
    cy.contains('Add todo').click();
    cy.get('li').should('have.length', 2);

    cy.get('li:last-child span:last-child').click();

    cy.get('li').should('have.length', 1);
  });

  it('should toggle status', () => {
    cy.get('input[type="text"]').type('Learn Redux').should('have.value', 'Learn Redux');
    cy.contains('Add todo').click();
    cy.get('li input').should('not.have.checked').click().should('have.checked');
  });
});