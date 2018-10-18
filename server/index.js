require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
// const nodemailer = require('nodemailer');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('endpoint live')
});

app.get('/api/homes', controller.getAllHomes)
// app.get('/api/home-results', controller.getHomesInCity);
app.get('/api/home/:id', controller.getOneHome);
// app.get('/api/getdays', controller.getCalculatedDays);
app.get('/api/home-images', controller.getHomeImgs);
app.post('api/chechout', controller.addUsersCheckoutRecipt)
app.post('/api/getdays', controller.postDates)
// app.post('/api/home', controller.createHome);
app.post('/api/homes-results', controller.postCity)

app.post("/charge", (req, res) => {
  // let amount = 500;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
    .then(customer =>
      stripe.charges.create({
        amount: req.body.total,
        description: "Sample Charge",
        currency: "usd",
        customer: customer.id
      }))
    .then(charge => res.render("charge.pug"));
});

// Nodemailer
// var transport = {
//   host: 'smtp.gmail.com',
  
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// app.post('/send', (req, res, next) => {
//   console.log(req.body);
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `<body style="background-color: #E4DDDE; border-radius: 10px; padding:10px;"><h1 style="background-color: #E4DDDE; color:#614B4E; font-family:'Muli', sans-serif">Name: ${name}</h1> \n <h2 style="background-color: #E4DDDE; font-family:'Muli', sans-serif;color:#614B4E">Email: ${email}</h2> \n <p style="font-family:'Muli', sans-serif; font-size:17px">Message: ${message}</p></body>`
//   console.log('name', name);
//   console.log('email', email);
//   console.log('message', message);
//   var mail = {
//     from: name,
//     to: creds.USER,  //Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content,
//     html: `${content}`
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       console.log('transporter.sendMail error',err)
//       res.json({
//         msg: 'fail'
//       })
//     } else {
//       res.json({
//         msg: 'success'
//       })
//     }
//   })
// })
// End of Nodemailer



massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database is runnin');
}).catch(error => {
  console.log('-------------- database issue', error);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port 4000`));
