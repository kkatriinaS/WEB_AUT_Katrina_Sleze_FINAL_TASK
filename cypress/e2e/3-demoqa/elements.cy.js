/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import PracticeFormPage from "../../pageObjects/practiceFormPage";

describe('Elements', () => {
    context("Practice Form scenarios", ()=>{
    beforeEach(() => {
     
      PracticeFormPage.visit();
    });
  
    it("Practice Form Positive", () => {
      PracticeFormPage.firstNameField.type("Jānis");
      PracticeFormPage.lastNameField.type("Bērziņš");
      PracticeFormPage.emailField.type("random@email.com");
      PracticeFormPage.genderButton.click();
      PracticeFormPage.userNumber.type("1234567890");
      PracticeFormPage.subjectsField().click().type('Economics');
      PracticeFormPage.hobbiesCheckBoxLabel.click();
      PracticeFormPage.selectDateOfBirth('28 Feb 1930');
      PracticeFormPage.currentAddressField.type("Random Current Address");
      PracticeFormPage.submitButton.click({ force: true });
      PracticeFormPage.uploadImage();
    });
    });
  }); 