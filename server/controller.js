

module.exports = {

    getAllHomes: (req, res) => {
        dbInstance = req.app.get('db');
        dbInstance.get_all_homes()
            .then(homes => {
                let reduced = homes.reduce((prev, curr) => {
                    let { home_id,
                        home_name,
                        price, max_guests,
                        describe_main,
                        describe_space,
                        describe_guest_access,
                        describe_interaction_with_guests,
                        describe_other_things_to_note,
                        address,
                        img_url,
                        city, } = curr;

                    prev[home_id] = prev[home_id] || {
                        home_id,
                        home_name,
                        price,
                        max_guests,
                        describe_main,
                        describe_space,
                        describe_guest_access,
                        describe_interaction_with_guests,
                        describe_other_things_to_note,
                        address,
                        city,
                        imgs: []
                    };
                    prev[home_id].imgs.push({
                        img_url,
                        main: Boolean(curr.main_image)
                    });
                    return prev;
                }, {});
                let homeArray = Object.keys(reduced).map(key => reduced[key]);

                res.status(200).send(homeArray);
            })
            .catch(err => {
                res.status(500).send(err)
            })
    },

    getHomeImgs: (req, res) => {
        dbInstance = req.app.get('db');
        let { imgs } = req.body;
        dbInstance.get_home_imgs_by_id(2)
            .then(imgs => {
                res.status(200).send(imgs)
            })
            .catch(err => {
                res.status(500).send(err)
            })

    },

    postDates: (req, res) => {
        console.log(req.body);

        dbInstance = req.app.get('db');
        const { start_date, end_date } = req.body;
        dbInstance.calculate_diff_of_days(start_date, end_date)
            .then(days => {
                res.status(200).send(days)
            })

            .catch(err => {
                res.status(500).send(err)
            })

            .catch(err => {
                res.status(500).send(err)
            })
    },


    postCity: (req, res) => {
        console.log(req.body)
        const { city } = req.body;
        dbInstance = req.app.get('db');
        dbInstance.get_homes_in_one_city(city)
            .then(homes => {
                let reduced = homes.reduce((prev, curr) => {
                    let { home_id,
                        home_name,
                        price, max_guests,
                        describe_main,
                        describe_space,
                        describe_guest_access,
                        describe_interaction_with_guests,
                        describe_other_things_to_note,
                        address,
                        img_url,
                        city, } = curr;

                    prev[home_id] = prev[home_id] || {
                        home_id,
                        home_name,
                        price,
                        max_guests,
                        describe_main,
                        describe_space,
                        describe_guest_access,
                        describe_interaction_with_guests,
                        describe_other_things_to_note,
                        address,
                        city,
                        imgs: []
                    };
                    prev[home_id].imgs.push({
                        img_url,
                        main: Boolean(curr.main_image)
                    });
                    return prev;
                }, {});
                let homeArray = Object.keys(reduced).map(key => reduced[key]);

                res.status(200).send(homeArray);
            })
            .catch(err => {
                res.status(500).send(err)
            })
    },



    getOneHome: (req, res) => {
        dbInstance = req.app.get('db');
        let { id } = req.params;
        dbInstance.get_one_home(id)
            .then(home => {
                res.status(200).send(home)
            })

            .catch(err => {
                res.status(500).send(err)
            })

            .catch(err => {
                res.status(500).send(err)
            })

    },

    addUsersCheckoutRecipt: (req, res) => {
        dbInstance = req.app.get('db');
        dbInstance.add_users_checkout_recipt([
            // req.body.home_id,
            // req.session.user.id,
            // req.body.host_id,
            // req.body.start_date,
            // req.body.end_date,
            // req.body.total
        ]).then(recipt => {
            res.status(200).send(recipt);
        })
            .catch(error => {
                console.log(error);
                res.status(500).send("error");
            });
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