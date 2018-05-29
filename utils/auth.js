const jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs');

exports.unhashPassword = async (password, hash) => {
  const unhashedPassword = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, hash) => {
      if (err) reject(error);
      if (!res) reject("Wrong password.");
      if (res) resolve(true);
    });
  });
};
