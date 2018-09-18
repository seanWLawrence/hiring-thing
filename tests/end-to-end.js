describe('Account', () => {
  /**
   * Starting from the homepage
   */
  describe('Homepage', () => {
    it('Login page can be accessed from the home page', function() {
      /**
       * Visits home page
       */
      cy.visit('/');
      /**
       * Clicks account login icon
       */
      cy.get('#account-login-icon').click();
      /**
       * Checks that the url is on the login page
       */
      cy.url().should('include', '/account/login');
    });
  });

  /**
   * Starting from the account login page
   */
  describe('Account page', () => {
    /**
     * Navigate to account page before each test
     */
    beforeEach(() => {
      cy.visit('/account/login');
    });

    it('Allows user to create new account', () => {
      /**
       * Clicks register button
       */
      cy.contains('Register').click();

      /**
       * Checks that url is on the account create page
       */
      cy.url().should('include', '/account/register');

      /**
       * Focuses on form email field and enters email
       */
      cy.get('label')
        .contains('Email')
        .next()
        .focus()
        .type(
          `${Math.random()
            .toString(36)
            .substring(7)}@beastgrip.com`,
        );

      /**
       * Enters password
       */
      cy.get('label')
        .contains('Password')
        .next()
        .focus()
        .type('password1');

      /**
       * Clicks create account button
       */
      cy.get('form')
        .contains('Create')
        .click();

      /**
       * Navigates to success page
       */
      cy.url().should('include', '/account/orders');
    });

    it('User can login and logout', () => {
      /**
       * Enters email
       */
      cy.get('label')
        .contains('Email')
        .next()
        .focus()
        .type('tester@gmail.com');

      /**
       * Enters password
       */
      cy.get('label')
        .contains('Password')
        .next()
        .focus()
        .type('password1');

      /**
       * Clicks login
       */
      cy.get('form')
        .contains('Login')
        .click();

      /**
       * Checks that the url is the success page
       */
      cy.url().should('include', '/account/orders');

      /**
       * Clicks logout
       */
      cy.get('a')
        .contains('Logout')
        .click();

      /**
       * Checks that the url is for a logged out user
       */

      cy.url().should('include', '/account/login');
    });

    describe('Password reset', () => {
      /**
       * Click forgot password button before each test in this section
       */
      beforeEach(() => {
        /**
         * Click the forgot password button
         */
        cy.get('a')
          .contains('Forgot')
          .click();
      });

      it('Displays success message when valid email was entered', () => {
        /**
         * Enters email
         */
        cy.get('#customer_recovery_email')
          .focus()
          .type('tester@gmail.com');

        /**
         * Clicks send button
         */
        cy.get('form')
          .contains('Send')
          .click();

        /**
         * Checks that success message is displayed
         */
        cy.get('span')
          .contains('Instructions have been sent to your email')
          .should('be.visible');
      });

      it(`User sees error message on email that doesn't exist`, () => {
        /**
         * Enters email
         */
        cy.get('#customer_recovery_email')
          .focus()
          .type('tester@gmaill.com');

        /**
         * Clicks send button
         */
        cy.get('form')
          .contains('Send')
          .click();

        /**
         * Checks that error message is displayed
         */
        cy.get('span')
          .contains('Invalid')
          .should('be.visible');
      });
    });
  });
});
