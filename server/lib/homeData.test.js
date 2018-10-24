const sinon = require('sinon')
const testDb = require('../../Test/init')
const toDoData = require('./homeData')


describe('Unit Test', () => {
  describe('Create', () => {
    it("Should pass in created home", () => {
      const home = {
        home_name: 'home name',
        price: 56,
        max_guests: 2,
        describe_main: 'main description',
        describe_space: 'home space',
        describe_guest_access: 'home guest acces',
        describe_interaction_with_guests: 'home interations with guests',
        describe_other_things_to_note: 'home describe other things to note',
        address: 'home address',
        city: 'home city',
        lat: 34.7451,
        long: -112.02168
      }

      const fakeDb = {
        query: sinon.mock().withArgs(
          sinon.match.string,
          sinon.match({
            home_name: home.name,
            price: home.price,
            max_guests: home.max_guest,
            describe_main: home.describe_main,
            describe_space: home.describe_space,
            describe_guest_access: home.describe_guest_access,
            describe_interaction_with_guests: home.describe_interaction_with_guests,
            describe_other_things_to_note: home.describe_other_things_to_note,
            address: home.address,
            city: home.city,
            lat: home.lat,
            long: home.long
          })
        )
      }
      return toDoData.createHome(fakeDb, {
        home_name: home.name,
        price: home.price,
        max_guests: home.max_guest,
        describe_main: home.describe_main,
        describe_space: home.describe_space,
        describe_guest_access: home.describe_guest_access,
        describe_interaction_with_guests: home.describe_interaction_with_guests,
        describe_other_things_to_note: home.describe_other_things_to_note,
        address: home.address,
        city: home.city,
        lat: home.lat,
        long: home.long
      })
    })
  })

})


describe('Integration Test', () => {
  let db
  beforeAll(() => {
    return testDb.initDb().then(dataBase => {
      db = dataBase

    })
  })

  describe('read', () => {
    it('read homes', () => {
      return toDoData.getHomes(db).then(homes => {
        expect(homes.length).not.toEqual(0)

      })

    })
  })

})



