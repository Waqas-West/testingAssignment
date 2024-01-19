describe("Test whole Web Application", () => {
  // 1. Visit Web Application
  it("User should be able to access the Web App", () => {
      cy.visit("http://localhost:5173");
      cy.contains("Login");
  });

  // ----------------------------------------------------------------
  //  Sign up:
  //  2. user can signup if he/she has no account
  it("a user can signup if he/she doest not have acccount", () => {
      cy.visit("http://localhost:5173/signup");
      cy.contains("Sign Up");

      cy.get("#name").type("david");
      cy.get("#email").type("david@gmail.com");
      cy.get("#root > div > div > div > form > button").click();
      cy.contains("Login");
  });
  
  //  3. a user can easily login
  it("logging of the registered user", () => {
    cy.visit("http://localhost:5173");
      cy.contains("Login");
      cy.get("#username").type("david@gmail.com");
      cy.get("#password").type("pwd123");
      cy.get("#root > div > div > div > form > button").click();
      cy.contains("Book List");
  });

   //  4. A User can search
  it("a user can search book", () => {
      cy.contain("Book List")
      cy.get("#root > div > div.bg-blue-200.h-screen > div > div > input").type("book");
  });

  // 5. Register in the Web App
  it("Verify that user can sign up into the Web App", () => {
      cy.get("#name").type("david");
      cy.get("#email").type("david@gmail.com");
      cy.get("#password").type("pwd123");
      cy.get("#signUpBtn").click();
      cy.contains("Don't have an account?");
  });

  //  ------------------------------------
  //  Login:
  // 6. When provided all required information except password
  it("User should not be able to access home page after he provides all required info except password on login page", () => {
      cy.get("#email").type("david@gmail.com");
      cy.get("#loginBtn").click();
      cy.contains("Don't have an account?");
  });

  // 7. When provided all required information except email
  it("User should not be able to access home page after he provides all required info except email on login page", () => {
      cy.get("#password").type("pwd123");
      cy.get("#loginBtn").click();
      cy.contains("Don't have an account?");
  });

  // 8. Login to the Web App
  it("User should be able to login into the Web App", () => {
      cy.get("#email").type("david@gmail.com");
      cy.get("#password").type("pwd123");
      cy.get("#loginBtn").click();
      cy.contains("Your Books");
  });

  // ---------------------------------------------------------------- 
  // 9. Store a book
  it("User should be able to store a book", () => {
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.justify-between.items-center > a").click();
      cy.contains("Create Book");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(1) > input").type("kitab noom");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(2) > input").type("kitab likhawonki noom");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(3) > input").type("kitab bara ki");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(4) > input").type("shaya kido tarekh");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > button").click();
      cy.contains("Book Stored successfully.");
  });

  // 10. Search book
  it("User should be able to search a book", () => {
      cy.get("#searchBar").type("kitab noom");
  });

  // ---------------------------------------------------------------- 
  // 11. Cards page
  it("User should be able to visit Cards page", () => {
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.items-center.gap-x-4.mb-5 > button:nth-child(3)").click();
  });

  // 12. Cards: Delete book
  it("User should be able to delete a book while he is on the Cards page", () => {
      cy.get("#CardsPage > div:nth-child(1) > div.flex.justify-between.items-center.gap-x-2.mt-5.p-4.pb-2 > a:nth-child(3)").click();
      cy.contains("Are you sure You want to delete this Book?");
      cy.get("#root > div > div.flex.flex-col.items-center.border-2.border-sky-400.rounded-xl.w-\[600px\].p-8.mx-auto > button").click();
      cy.contains("Book Deleted successfully.");
  });

  // 13. Cards: Edit book
  it("User should be able to edit a book while he is on the Cards page", () => {
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.items-center.gap-x-4.mb-5 > button:nth-child(3)").click();
      
      cy.get("#CardsPage > div:nth-child(2) > div.flex.justify-between.items-center.gap-x-2.mt-5.p-4.pb-2 > a:nth-child(2)").click();
      cy.contains("Edit Book");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(1) > input").type("hgdhasjgdhas");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(2) > input").type("bfhasdasd");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(3) > input").type("sdvndvds");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(4) > input").type("2231");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > button").click();
      cy.contains("Book Edited successfully.");
  });

  // 14. Cards: Book Details
  it("User should be able to see details of a specific book while he is on the Cards page", () => {
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.items-center.gap-x-4.mb-5 > button:nth-child(3)").click();

      cy.get("#CardsPage > div:nth-child(1) > div.flex.justify-between.items-center.gap-x-2.mt-5.p-4.pb-2 > a:nth-child(1)").click();
      cy.contains("Book Details");
      cy.get("#root > div > div:nth-child(1) > a").click();
      cy.contains("Your Books");
      
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.items-center.gap-x-4.mb-5 > button:nth-child(3)").click();
  });

  // --------------------------------------------------------------------------
  // 15. Table page
  it("User should be able to visit Table page", () => {
      cy.get("#root > div > div.flex.justify-between.items-center > div.flex.items-center.gap-x-4.mb-5 > button:nth-child(2)").click();
  });

  // 16. Table: Delete book
  it("User should be able to delete a book while he is on the Table page", () => {
      cy.get("#TablePage > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > a:nth-child(3)").click();
      cy.contains("Are you sure You want to delete this Book?");
      cy.get("#root > div > div.flex.flex-col.items-center.border-2.border-sky-400.rounded-xl.w-\[600px\].p-8.mx-auto > button").click();
      cy.contains("Book Deleted successfully.");
  });

  // 17. Table: Edit book
  it("User should be able to edit a book while he is on the Table page", () => {
      cy.get("#TablePage > table > tbody > tr:nth-child(2) > td:nth-child(5) > div > a:nth-child(2)").click();
      cy.contains("Edit Book");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(1) > input").type("jbkjbjbkb");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(2) > input").type("jkbkbbbjb");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(3) > input").type("sbckascbjsab");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > div:nth-child(4) > input").type("2342");
      cy.get("#root > div > div.flex.flex-col.border-2.border-sky-400.rounded-xl.w-\[600px\].p-4.mx-auto > button").click();
      cy.contains("Book Edited successfully.");
  });

  // 18. Table: Book Details
  it("User should be able to see details of a specific book while he is on the Table page", () => {
      cy.get("#TablePage > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > a:nth-child(1)").click();
      cy.contains("Book Details");
      cy.get("#root > div > div:nth-child(1) > a").click();
      cy.contains("Your Books");
  });

  // -----------------------------------------------------------------------------------
  // 19. Logout from Web Application
  it("User should be able to logout from Web App", () => {
      cy.get("logout").click();
      cy.contains("Login");
  });

});

