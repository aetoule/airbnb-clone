module.exports = {
  getHomes(db) {
    return db.query('SELECT * FROM home')
  },
  
  createHome(db, home) {
    return db.query('INSERT INTO homes (home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city) VALUES (${home_name}, ${price}, ${max_guests} , ${describe_main} , ${describe_space} , ${describe_guest_access} , ${describe_interaction_with_guests} , ${describe_other_things_to_note}, ${address}, ${city}, ${lat}, ${long} ) RETURNING *;', {
      home_name: home.name,
      price: home.price,
      max_guests: home.max_guests,
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
  },
  // getUsers(db) {
  //   return db.query('SELECT * FROM users')
  // },
  // createUser(db, user) {
  //   return db.query('INSERT INTO users (auth0_id, name, is_host) VALUES (${auth0_id}, ${name}, ${is_host}) RETURNING *;', {
  //     auth0_id: user.auth0_id,
  //     name: user.name, 
  //     is_host: user.is_host
  //   })
  // }

  createImage(db, image) {
    return db.query('INSERT INTO images(img_url, home_id) values (${img_url} returning *;', {
      img_url: image.img_url,
    })
  }
}
