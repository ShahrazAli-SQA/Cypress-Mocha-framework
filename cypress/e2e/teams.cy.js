import Teams from "../pageObject/teamsPage";
import { faker } from "@faker-js/faker";
const teams = new Teams();

const email = faker.internet.email({provider: 'amroodlabs.com'})

describe("Login to Dmarc application using registered Account", function () {
    it("Login to Dmarc application using registered Account", function () {
    });
    describe("Verify whether Team-Owner is able to add a new Team", function () {
        it("Click on Navigation bar team button", function(){
        });
    });
    describe("Verify if whether Team-owner is able to add domain and members within the team", function(){
        it("Add a new member in qa-team", function(){
            teams.enterMemberEmail(email);
        });
    });
    describe("Verify whether a newly invitee Team member is able to ", function () {
        it("Prerequsite: Get the Team Member email Id", function () {
        })
    });
});

describe("Login to Dmarc application using registered Account", function () {
    it("Login to Dmarc application using registered Account", function () {
    });
    describe("Verify whether user is able to add a new Team", function () {
        it("Add same member in another team without any permission", function(){
            teams.enterMemberEmail(email); 
        });
    });
    describe("Verify Member should not has permissions such as Tag,Alert,summary,Timeline,widgets,Domain Report,Domain on invitee Team member account",function(){
        it("Login to the account", function(){
            teams.getEmailField(email);
        });
    });
});
