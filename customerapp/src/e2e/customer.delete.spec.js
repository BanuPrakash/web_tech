describe("delete customer UI", () => {
    it("delete a customer by click of button", () => {
        cy.visit("http://localhost:3000"); // open this in browser
        // document.querySelectorAll("button")
        cy.get("button").first().click()
            .get(".row").then(rows => {
                expect(rows.length).to.eq(5);
            })
    })
})