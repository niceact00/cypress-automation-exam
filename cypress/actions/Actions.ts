class Actions{
    selectCookiePreference(selector: string){
        cy.get(selector, {timeout: 5000})
        .should('be.visible')
        .click();
    }

    clickButton(selector: string){
        cy.get(selector, {timeout:5000})
        .should('exist')
        .should('be.visible')
        .click();
    }

    inputText(selector: string, textToInput:string){
        cy.get(selector, {timeout:5000})
        .should('exist')
        .should('be.visible')
        .type(textToInput);
    }

    checkFieldDisplayed(selector: string){
       cy.get(selector, {timeout:5000})
       .should('exist')
       return true;
    }

    submitApplicationViaTheUserIcon(selector:string, selector2: string){
        cy.get(selector, {timeout:5000})
        .should('exist')
        .should('be.visible')
        .click().then(()=>{
            cy.get(selector2, {timeout:5000})
            .should('exist')
            .should('be.visible')
            .click();
        })
    }

    uploadAPhoto(selector: string){
        cy.get(selector, {timeout:5000})
        .selectFile('cypress/fixtures/images/sampleImage.jpg', {force: true})
    }

    inputTextAndSelectAutoCompleteDisplayed(selector: string, inputText: string, autoCompleteSelector: string){
        cy.get(selector, {timeout:5000})
        .should('exist')
        .should('be.visible')
        .type(inputText).then(()=>{
            cy.get(autoCompleteSelector).click();
        })
        }

    selectValueFromDropdownField(selector: string, valueToSelect:string){
        cy.get(selector, {timeout: 5000})
        .should('exist')
        .should('be.visible')
        .select(valueToSelect)
        .should('contain.text',valueToSelect);

    }
    
    selectRadioButton(selector: string){
    cy.get(selector, {timeout: 5000})
    .should('exist')
    .should('be.visible')
    .click();
    }

    selectCheckbox(selector: string){
        cy.get(selector, {timeout: 5000})
        .should('exist')
        .should('be.visible')
        .click();
        }

    checkValueInSummary(selector: string, expectedValue:string){
        cy.get(selector, {timeout: 5000})
        .should('exist')
        .should('be.visible')
        .should('contain.text', expectedValue)
    }
    
    checkPageHeaderDisplayed(selector: string){
        cy.get(selector, {timeout: 5000})
        .should('exist')
        .should('be.visible')
    }

}
export default Actions;