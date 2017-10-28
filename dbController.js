const mongoose = require('mongoose');
var Company = require('./model/company');

module.exports = function getCompanyByTag(req, res) {
  Company.getTagsList()
  .then(err, tags => {
    if (err)
      console.log(err);
    return tags;
  })
}
