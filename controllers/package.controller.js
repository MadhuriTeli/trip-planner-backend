const Validator = require("fastest-validator");
const models = require("../models");

// Get API to get all packages
function getPackages(req, res) {
  models.Packages.findAll({
    attributes: [
      "id",
      "tripname",
      "image",
      "duration",
      "description",
      "package_inclusions",
      "amount",
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

/*
//Post API to add items to favourites
function save(req, res) {
  const savedPackage = {
    userId: req.body.userId,
    destId: req.body.destId,
  };

  const schema = {
    userId: { type: "number", optional: false, max: "32" },
    destId: { type: "number", optional: false, max: "32" },
  };

  const v = new Validator();
  const validationResponse = v.validate(savedPackage, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      errors: validationResponse,
    });
  }

  models.savedpackages
    .create(savedPackage)
    .then((result) => {
      res.status(201).json({
        message: "Packages saved successfully",
        savedPackage: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}
*/

// API to get dest data
function getPackagesDetails(req, res) {
  console.log(req.params.userId);
  // const savedPackage = {
  //     userId: req.params.userId
  // }

  // const schema = {
  //     userId: {type:"number", optional: false, max: "32"}
  // }

  // const v = new Validator();
  // const validationResponse = v.validate(savedPackage, schema);

  // if(validationResponse !== true){
  //     return res.status(400).json({
  //         message: "Validation failed",
  //         errors: validationResponse
  //     });
  // }

  models.Packages.findAll({
    attributes: [
      "id",
      "tripname",
      "image",
      "duration",
      "description",
      "package_inclusions",
      "amount",
    ],
    where: {
      vendor_id: req.params.userId,
    },
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

  /*
  models.savedpackages
    .findAll({
      attributes: ["id", "userId", `destId`],
      where: {
        userId: req.params.userId,
      },
      include: [
        {
          model: models.Packages,
          attributes: [
            "id",
            "tripname",
            "image",
            "duration",
            "description",
            "package_inclusions",
            "amount",
          ],
        },
      ],
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!" + error,
      });
    });
    */
}

function getPackageById(req, res) {
  const id = req.params.id;
  models.Packages.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Packages not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function addPackage(req, res) {
  console.log("Data received in addPackage : ");
  console.log("req.body");
  console.log(req.body);
  let file = req.body.image;
  //const file = req.files.file;
  console.log("file");
  console.log(file);
  //console.log(file.name);
  //console.log(JSON.stringify(file));

  let imgPath = "";
  
  //Sign up
  const package = {
    tripname: req.body.tripname,
    //image: req.body.
    image: "",
    duration: req.body.duration,
    description: req.body.description,
    package_inclusions: req.body.package_inclusions,
    amount: req.body.amount,
    vendor_id: req.body.vendor_id,
  };
  console.log("package");
  console.log(package);
  models.Packages.create(package)
    .then((result) => {
      res.status(201).json({
        message: "Package created successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
};

module.exports = {
  getPackages: getPackages,
  //save: save,
  addPackage: addPackage,
  getPackagesDetails: getPackagesDetails,
  getPackageById: getPackageById,
};
