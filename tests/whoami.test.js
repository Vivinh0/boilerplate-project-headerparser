"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

function objToString(obj) {
  return JSON.stringify(obj, null, 2);
}

describe("Test Headerparser Microservice", () => {
  let server;

  // Start server before each test
  beforeEach((done) => {
    server = require("../server");
    done();
  });

  // Close server after each test
  afterEach((done) => {
    server.close(() => done());
  });

  describe("GET /api/whoami", () => {
    it("should return a JSON object with your IP address in the ipaddress key", (done) => {
      chai
        .request(server)
        .get("/api/whoami")
        .end((err, res) => {
          // Get results
          const actualResult = res.body;
          // console.log(res);
          const expectedResult = {
            ipaddress: "::ffff:127.0.0.1",
            language: "en-US,en;q=0.5",
            software: "node-superagent/3.8.3",
          };

          // Results to Strings
          const actualResultToString = objToString(actualResult);
          const expectedResultToString = objToString(expectedResult);

          // Test results
          expect(actualResultToString).to.be.equal(expectedResultToString);

          done();
        });
    });
  });
});
