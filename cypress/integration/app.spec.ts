describe('Home page', () => {
    it('Should visit home page', () => {
        cy.visit('http://localhost:3000/')

        cy.get('h1').contains('upro')
    })

    it('Should switch theme', () => {
        cy.get('#theme-toggle').click()
    })

    it('Should should navigate to the about us page', () => {
        cy.get('#home-desc>a').click()
    })
})

describe('About us page', () => {
    it('Should visit about page', () => {
        cy.visit('http://localhost:3000/about')
    })
})
