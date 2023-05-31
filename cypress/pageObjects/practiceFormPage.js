

class PracticeFormPage{
    static get url(){
        return "/automation-practice-form";
    }
    static visit(){
        cy.visit(this.url);
    }

    static get firstNameField(){
        return cy.get("#firstName");
    }
    static get lastNameField(){
        return cy.get("#lastName");
    }
    static get emailField(){
      return cy.get("#userEmail-wrapper");
    }
    static get genderButton() {
        return cy.get('label[for="gender-radio-1"]');
      }
   
      
    static get userNumber(){
        return cy.get("#userNumber-wrapper");
    }
    static selectDateOfBirth(date) {
        cy.get('#dateOfBirthInput').click().type(date);
    }
      
    static subjectsField() {
        return cy.get('#subjectsInput').type('Economics');
      }
      
      static get hobbiesCheckBoxLabel() {
        return cy.get('label[for="hobbies-checkbox-3"]');
      }
      
    static get currentAddressField(){
        return cy.get("textArea#currentAddress");
    }
    static uploadImage(){
    cy.fixture('harold.jpg').then((fileContent) => {
        cy.get('#uploadPicture').attachFile({
          fileContent: fileContent,
          fileName: 'harold.jpg',
          mimeType: 'image/jpg',
    });
    });
}

    static get submitButton(){
        return cy.get("button#submit");
    }
    
      
      }
      

export default PracticeFormPage;