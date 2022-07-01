describe("filter customer UI", () => {
    it("filter  customers who have lastName 'Geller'", () => {
        cy.visit("http://localhost:3000"); // open this in browser
        // document.querySelectorAll("input[type='text']")
        cy.get("input[placeholder='search by name']")
            .type("Geller")
            .get(".row").then(rows => {
                expect(rows.length).to.eq(2);
            })
    })
})