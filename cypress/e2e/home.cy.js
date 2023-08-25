/// <reference types="cypress" />

describe('Adição, Alteração e Remoção de contatos', () => {
    
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Inclusão do Contato', () => {
        cy.get('[type="text"]').type('Novo Contato')
        cy.get('[type="email"]').type('novocontato@email.com')
        cy.get('[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })  
    
    it('Edição do contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
    })

    it('deve alterar o primeiro contato selecionado', () => {
        cy.get('.edit').first().click()

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Nome Atualizado')

        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('nomeatualizad.o@teste.com')

        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('11 87654321')

        cy.get('.alterar').click()
    })

    it('Deve apagar o ultimo contato', () => {
        
        cy.get('.delete').last().click()
    })
})