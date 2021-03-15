const mongoose = require('mongoose');

module.exports = {
  attach() {
    mongoose
      .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      })
      .then(() => console.log('Linked 😉'))
      .catch(err => console.error(err));
  }
};
