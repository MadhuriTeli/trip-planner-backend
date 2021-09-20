module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    mobno: DataTypes.STRING,
    company_name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  Vendor.associate = function(models) {
    // associations can be defined here
  };
  return Vendor;
};