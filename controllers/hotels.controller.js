const Validator = require("fastest-validator");
const models = require("../models");

// Get API to get all Hotels
function getHotels(req, res) {
  models.Hotels.findAll({
    attributes: [
      "id",
      "title",
      `contact_no`,
      `website`,
      `address`,
      `pincode`,
      `city`,
      `state`,
      `price`,
      `description`,
      `hotel_type`,
      `star`,
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

function getHotelsById(req, res) {
  const id = req.params.id;

  models.Hotels.findByPk(id)

    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Hotels not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

module.exports = {
  getHotels: getHotels,
  getHotelsById: getHotelsById,
};
