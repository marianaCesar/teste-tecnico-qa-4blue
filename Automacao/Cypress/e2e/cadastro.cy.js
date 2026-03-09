import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Teste técnico 4blue - Cadastro e Login', () => {
    beforeEach(() => {
        cy.visit('https://qa-play-sim.lovable.app/');
    });

    it('Deve criar conta e fazer login com sucesso', () => {
        cy.contains('a', 'Criar conta').click();
        cy.contains('h1', 'Crie sua conta').should('be.visible');
        const email = 'marianacesar@4blue.com.br';
        const senha = 'avagaeminha!';

        // Preencher demais campos com faker
        const nomeFaker = faker.person.fullName();
        const telefoneFaker = faker.string.numeric(11);

        // Preenchimento do formulário
        cy.get('input[placeholder="Seu nome"]').type('QA Marina Cesar');
        cy.get('input[placeholder="(00) 00000-0000"]').type(telefoneFaker);
        cy.get('input[placeholder="seu@email.com"]').type(email);

        // Como há dois campos de senha (Senha e Confirmar Senha)
        cy.get('input[type="password"]').first().type(senha);
        cy.get('input[type="password"]').last().type(senha);

        cy.contains('button', 'Criar conta').click();

        cy.contains('h1', 'Conta criada com sucesso').should('be.visible');
        cy.contains('p', 'Sua conta foi criada. Você já pode acessar a plataforma.').should('be.visible');

        // Volta para a tela de login
        cy.contains('button', 'Sair da conta').click();

        // Faz login com a conta recém-criada
        cy.get('input[placeholder="seu@email.com"]').type(email);
        cy.get('input[type="password"]').type(senha);

        cy.contains('button', 'Entrar').click();

        cy.get('.glass-card').within(() => {
            cy.get('img[alt="4blue"]').should('be.visible');
            cy.contains('h1', 'Login realizado com sucesso').should('be.visible');
            cy.contains('p', 'Você foi autenticado e já pode utilizar o sistema.').should('be.visible');
            cy.contains('button', 'Sair da conta').should('be.visible').and('have.class', 'btn-primary');
        });
    });
});
