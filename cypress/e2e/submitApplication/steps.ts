import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import Actions from '../../actions/Actions';
import { camelCase } from 'lodash';
import { getIframe } from '../../support/commonMethod';

const loginCredentials = {
    email : 'optimyautomationtester@gmail.com',
    password: 'yRMhojb7'
}

const actions = new Actions();

beforeEach(() =>{
    cy.fixture(`element-pattern/selectors.json`).as(`pageSelectors`);
})

Given('I go to automation interface website',() =>{
    cy.visit('/');
});

Then('I select {string} in the cookie preferences',(choiceToSelect: string)=>{
  cy.get(`@pageSelectors`).then((elements: any) =>{
    const toSelect = elements.locators[camelCase(choiceToSelect)].selector;
    actions.selectCookiePreference(toSelect);    
  });
});

Then('I click {string} button', (buttonToClick: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const buttonSelector = elements.locators[camelCase(buttonToClick)].selector;

        actions.clickButton(buttonSelector);
    })
});

Then('I login using the credentials', ()=>{
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const buttonSelector = elements.locators.loginButton.selector;
        const loginEmailTextField = elements.locators.loginEmailTextField.selector;
        const loginPasswordTextField = elements.locators.loginPasswordTextField.selector;
        const LoginBtnOnLoginPage = elements.locators.loginButtonInLoginPage.selector;


        actions.clickButton(buttonSelector);
        actions.inputText(loginEmailTextField,loginCredentials.email);
        actions.inputText(loginPasswordTextField,loginCredentials.password);
        actions.clickButton(LoginBtnOnLoginPage);
    })
});

Then('continue with the submission of the application buttons are present, I click {string} button',(buttonToClick: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) => {
        const continueSubmissionButton = elements.locators.continueWithSubmissionOfApplication.selector;
        if(actions.checkFieldDisplayed(continueSubmissionButton) == true){
            const buttonSelector = elements.locators[camelCase(buttonToClick)].selector;

        actions.clickButton(buttonSelector);
        }else{
            const userIcon = elements.locators.userIcon.selector;
            const submitNewApplicationUnderUserIcon = elements.locators.fromUserIconSubmitNewApplication.selector;

            actions.submitApplicationViaTheUserIcon(userIcon,submitNewApplicationUnderUserIcon);
        }
        
    });   
});

Then('On the form, I upload a photo',() =>{
    cy.get(`@pageSelectors`).then((elements: any) => {
        const fileUpload = elements.locators.fileUpload.selector;

        actions.uploadAPhoto(fileUpload);
    });
});

Then('On the form, I input {string} on the {string} text field',(inputValue: string, textField: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) => {
        const textFieldLocator = elements.locators[camelCase(textField)].selector;

        actions.inputText(textFieldLocator,inputValue);
    });
});

Then('On the form, I input and select {string} on the {string} autocomplete field',(inputValue: string, textField: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) => {
        const textFieldLocator = elements.locators[camelCase(textField)].selector;
        const autoCompleteLocator = elements.locators.postalCodeAutoCompleteFirstResult.selector;

        actions.inputTextAndSelectAutoCompleteDisplayed(textFieldLocator,inputValue,autoCompleteLocator);
    });
});

Then('On the form, I select {string} from {string} dropdown field',(valueToSelect: string, dropdownName: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) => {
        const dropdownLocator = elements.locators[camelCase(dropdownName)].selector;

        actions.selectValueFromDropdownField(dropdownLocator,valueToSelect);
    });
});

Then('On the form, I select {string} radio button field',(radioButtonToSelect:string) => {
    cy.get(`@pageSelectors`).then((elements: any) => {
        const radioButtonSelected = elements.locators[camelCase(radioButtonToSelect)].selector;

        actions.selectRadioButton(radioButtonSelected);
    });
});

Then('On the form, I select {string} checkbox field',(checkboxToSelect:string) => {
    cy.get(`@pageSelectors`).then((elements: any) => {
        const checkboxSelected = elements.locators[camelCase(checkboxToSelect)].selector;

        actions.selectCheckbox(checkboxSelected);
    });
});

Then('On the form, I input {string} value on What is your career objective? text field',(textToinput: string) =>{
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const textField = elements.locators.iframeOfTextField.selector;

        getIframe(textField)?.find('body').clear();
        getIframe(textField)?.find('body').type(textToinput);
    });
});

Then('On the summary page, I validate that the {string} field value should be {string}',(fieldName: string, expectedFieldValue:string) =>{
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const fieldNameSelector = elements.locators[camelCase(fieldName)].selector;

        actions.checkValueInSummary(fieldNameSelector, expectedFieldValue);

    });
});

Then('On the summary page, I validate that the number {string} value of {string} field should be {string}',(orderOfTheExpectedValue: string, fieldName: string, expectedFieldValue:string) => {
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const fieldNameSelector = elements.locators[camelCase(fieldName)].selector;

        const fieldNameSelectorByHierarchy = fieldNameSelector + ` > :nth-child(${orderOfTheExpectedValue})`

        actions.checkValueInSummary(fieldNameSelectorByHierarchy, expectedFieldValue);

    });
});

Then('I should be redirected to the {string} page',(expectedPage: string)=>{
    cy.get(`@pageSelectors`).then((elements: any) =>{
        const expectedPageElement = elements.locators[camelCase(expectedPage)].selector;
        
        actions.checkPageHeaderDisplayed(expectedPageElement)
    })
})