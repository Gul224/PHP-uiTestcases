import {Given } from "cypress-cucumber-preprocessor/steps";


const url = 'https://'
Given ('i open RWA page', () => {
    cy.visit(url)
})