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
        describe_guest_access: 'home guest access',
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
    }),
    // unit test of img url is not empty
    describe('Create', () => {
      it('Should pass in an image url', () => {
          const home = {
              img_url: 'imgurl'
          }
          const fakeDb = {
              query: sinon.mock().withArgs(
                  sinon.match.string,
                  sinon.match({
                      
                      img_url: home.img_url
                  })
              )
          }
          return homeData.createImage(fakeDb, {
              img_url: home.img_url
          })
      })
    })
  })

  // describe('Create', () => {
  //   it("Should pass in created user", () => {
  //     const user = {
  //       auth0_id: 'blah12eurh2',
  //       name: 'bob ross', 
  //       is_host: 'true'
  //     }

  //     const fakeDb = {
  //       query: sinon.mock().withArgs(
  //         sinon.match.string,
  //         sinon.match({
  //           auth0_id: user.auth0_id,
  //           name: user.name, 
  //           is_host: user.is_host
  //         })
  //       )
  //     }
  //     return homeData.createUser(fakeDb, {
  //       auth0_id: user.auth0_id,
  //       name: user.name, 
  //       is_host: user.is_host
  //     })
  //   })
  // })
  describe('Create', () => {
    it("Should pass in created image", () => {
      const image = {
        img_url: 'blahurl'
      }

      const fakeDb = {
        query: sinon.mock().withArgs(
          sinon.match.string,
          sinon.match({
            img_url: image.img_url,
          })
        )
      }
      return homeData.createImage(fakeDb, {
        img_url: image.img_url
      })
    })
  })


})


describe('Integration Test', () => {
  let db

  function clearDataBase() {
    return db.query('DELETE from todos')
  }

  beforeAll(() => {
    return testDb.initDb().then(dataBase => {
      db = dataBase
    })
  })
  beforeEach(() => {
    return clearDataBase();
})

  describe('read', () => {
    it('read homes', () => {
      return homeData.getHomes(db).then(homes => {
        expect(homes.length).not.toEqual(0)
      })
    })
  })

  // describe('read users', () => {
  //   it('reads users', () => {
  //     return homeData.getUsers(db).then(users => {
  //       expect(users.length).not.toEqual(0)
  //     })
  //   })
  // })
})



