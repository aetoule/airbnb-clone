const sinon = require('sinon');
const testDb = require('../../test/init');
const homeData = require('./homeData');

describe('Unit Test', () => {
    describe('Get', () => {
        it('Should get all homes', () => {
            const home = {
                homeName: 'testing home (name)',
                
            }
            const fakeDb = {
                query: sinon.mock().withArgs(
                    sinon.match.string,
                    sinon.match({
                        
                    })
                )
            }
            return homeData.getHomes(fakeDb, {
                name: home_name
            })
        })
    })
})

