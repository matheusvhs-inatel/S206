/// <reference types="cypress"/>

describe('Teste de Cálculo de Juros Simples', () => {

    it('Calcula juros simples com valores positivos', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('100');
        cy.get('#quantMeses').type('12');
        cy.get('#montanteIni').type('100000');
        cy.get('.btn').click();
    });

    it('Valida comportamento com taxa de juros negativa', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('-100');
        cy.get('#quantMeses').type('12');
        cy.get('#montanteIni').type('100000');
        cy.get('.btn').click();
    });

    it('Testa cenário com número de meses negativo', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('100');
        cy.get('#quantMeses').type('-12');
        cy.get('#montanteIni').type('100000');
        cy.get('.btn').click();
    });

    it('Testa cálculo com valor inicial negativo', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('100');
        cy.get('#quantMeses').type('12');
        cy.get('#montanteIni').type('-100000');
        cy.get('.btn').click();
    });

    it('Valida comportamento com campo de meses vazio', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('100');
        cy.get('#quantMeses').clear();
        cy.get('#montanteIni').type('100000');
        cy.get('.btn').click();
    });

    it('Testa cálculo com valores extremamente altos', () => {
        cy.visit('https://www.calculadora.com.br/financeira/juros-simples/');
        cy.get('#porcentagem').type('1'.repeat(70));
        cy.get('#quantMeses').type('9'.repeat(50)); 
        cy.get('#montanteIni').type('8'.repeat(60)); 
        cy.get('.btn').click();
    });
});
