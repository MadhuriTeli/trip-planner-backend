const Validator = require("fastest-validator");
const models = require("../models");

//Post API to add items to favourites
function save(req, res) {
  const savedDest = {
    userId: req.body.userId,
    destId: req.body.destId,
    // imageUrl: req.body.image_url,
    // categoryId: req.body.category_id,
    // userId: 1
  };

  const schema = {
    userId: { type: "number", optional: false, max: "32" },
    destId: { type: "number", optional: false, max: "32" },
  };

  const v = new Validator();
  const validationResponse = v.validate(savedDest, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.saveddestinations
    .create(savedDest)
    .then((result) => {
      res.status(201).json({
        message: "Destinations saved successfully",
        savedDest: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  save: save,
};
