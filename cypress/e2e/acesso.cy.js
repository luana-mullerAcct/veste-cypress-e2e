/// <reference types="cypress" />

describe('Acesso ao site da loja Individual', () => {

  //Acessando a loja e verificando pela imagem se a mesma foi carregada
  it('Acesso a homepage', () => {
    cy.visit('https://www.individual.com.br')
    //cy.get('.vtex-store-components-3-x-imageElement').should('be.visible')
    cy.get('.cc-window').should('be.visible')
    cy.get('.cc-btn').click()
    //cy.get('.vtex-modal-layout-0-x-container').click()
  })

   
 
})

