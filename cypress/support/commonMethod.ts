export const getIframe = (path: string) => {
    return cy.get(path).its('0.contentDocument').should('exist').then(cy.wrap);
}