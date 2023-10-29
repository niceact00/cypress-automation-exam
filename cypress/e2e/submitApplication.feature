Feature: Submit application feature

Scenario: Submit application
Given I go to automation interface website
And I select "use necessary cookies only" in the cookie preferences
And I login using the credentials
And I click "submit new application" button
When continue with the submission of the application buttons are present, I click "submit new application at the buttom" button
And On the form, I input "Johny" on the "first name" text field
And On the form, I input "Bravo" on the "last name" text field
And On the form, I input "townsville blk98 lot 99" on the "address" text field
And On the form, I input and select "1000" on the "postal code" autocomplete field
And On the form, I upload a photo
And On the form, I select "Afghanistan" from "country" dropdown field
And On the form, I select "male" radio button field
And On the form, I select "Automation tester" from "role" dropdown field
And On the form, I select "jira" checkbox field
And On the form, I select "robot framework" checkbox field
And On the form, I select "javascript" checkbox field
And On the form, I input "this is testing" value on What is your career objective? text field
And I click "next screen" button

Then On the summary page, I validate that the "first name summary" field value should be "Johny"
And On the summary page, I validate that the "last name summary" field value should be "Bravo"
And On the summary page, I validate that the "address summary" field value should be "townsville blk98 lot 99"
And On the summary page, I validate that the "postal code summary" field value should be "1000 - Bruxelles / Brussel"
And On the summary page, I validate that the "country summary" field value should be "Afghanistan"
And On the summary page, I validate that the "uploaded photo summary" field value should be "sampleimage.jpg"
And On the summary page, I validate that the "role summary" field value should be "Automation tester"
And On the summary page, I validate that the "gender summary" field value should be "Male"
And On the summary page, I validate that the number "1" value of "familiar tools summary" field should be "JIRA"
And On the summary page, I validate that the number "2" value of "familiar tools summary" field should be "Javascript"
And On the summary page, I validate that the number "3" value of "familiar tools summary" field should be "Robot Framework"
And On the summary page, I validate that the "career objective summary" field value should be "this is testing"

When I click "validate and send" button
Then I should be redirected to the "thank you for submitting" page