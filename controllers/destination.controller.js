const Validator = require("fastest-validator");
const models = require("../models");

// Get API to get all destinations
function getDestinations(req, res) {
  models.Destinations.findAll({
    attributes: [
      "id",
      "title",
      `address`,
      `pincode`,
      `city`,
      `state`,
      `visiting_hours`,
      `visiting_fee`,
      `description`,
      `picture`,
      `image`,
    ],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

module.exports = {
  getDestinations: getDestinations,
};
