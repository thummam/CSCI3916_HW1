const chai = require('chai');
const chaiHttp = require('chai-http');
const {expect} = chai;
const server = require ('../server');

chai.use(chaihHttp);

describe('POST /', () => {
    it('should returna JSOn object withthe accept header', (done) => {
        const sampleBody ={message: "Hello, World!"};

        chai
            .request(server)
            .post('/')
            .set('accept', 'application/json')
            .end((err,response) => {
                expect(err).to.be.null;
                expect(response).to.have.status(200);
                expect(response).to.be.json;
                expect(response.body).to.have.property('message', "Hello, World!");
                  
                

                done();
            });

    });


});