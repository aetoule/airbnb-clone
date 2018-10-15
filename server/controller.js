module.exports = {

    getAllHomes: (req, res) => {
        dbInstance = req.app.get('db');
        dbInstance.get_all_homes()
        .then(homes => {
            res.status(200).send(homes)})
        .catch(err => {
            res.status(200).send(err)
        })
    },

    getHomesInCity: (req, res) => {
        dbInstance = req.app.get('db');
        let {city} = req.body;
        dbInstance.get_homes_in_one_city(city)
        .then(homes => {
            res.status(200).send(homes)})
        .catch(err => {
            res.status(200).send(err)
        })
    
    }
    // createHome: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     let {home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city} = req.body;
    //     dbInstance.add_home([home_name, price, max_guests, describe_main, describe_space, describe_guest_access, describe_interaction_with_guests, describe_other_things_to_note, address, city])
    //     .then(home => {
    //         res.status(200).send(home)})
    //     .catch(err => {
    //         res.status(500).send(err)
    //     })
    // }
}