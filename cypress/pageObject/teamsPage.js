class Teams{
    enterMemberEmail(email){
        // this.getMember().clear({ force: true }).type(email, { force: true })
        cy.log(email)
    }
    getEmailField(emails){
        // cy.get(EMAIL_FIELD).clear({ force: true }).type(emails)
        cy.log(emails);
    }
}
export default Teams;
