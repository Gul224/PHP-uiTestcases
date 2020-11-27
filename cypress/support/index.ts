// @ts-check
import "@cypress/code-coverage/support";
import "@percy/cypress";
import "./commands";
import './commands'
   Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   return false
   })