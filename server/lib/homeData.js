module.exports = {
  getHomes(db) {
    return db.query('SELECT * FROM home')
  },

  createHome(db, home) {
    return db.query('INSERT INTO homes (home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city) VALUES (${home_name}, ${price}, ${max_guests} , ${describe_main} , ${describe_space} , ${describe_guest_access} , ${describe_interaction_with_guests} , ${describe_other_things_to_note}, ${address}, ${city} ) RETURNING *;', {
      home_name: home.name,
      price: home.price,
      max_guests: home.max_guests,
      describe_main: home.describe_main,
      describe_space: home.describe_space,
      describe_guest_access: home.describe_guest_access,
      describe_interaction_with_guests: home.describe_interaction_with_guests,
      describe_other_things_to_note: home.describe_other_things_to_note,
      address: home.address,
      city: home.city
    })
  }

}
