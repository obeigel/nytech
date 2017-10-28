const express = require('express');
const router = express.Router();
const dbController = require('./dbController');
var Company = require('./model/company');

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

router.route('/companies')
.get(function(req, res) {
    //looks at our company Schema
    Company.find(function(err, company) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        //responds with a json object of our database companys.
        res.json(company);
    });
})
.post(function(req, res) {
    var company = new Company();

    company.name = req.body.name.trim();
    company.describtion = req.body.describtion.trim();
    company.location = req.body.location.trim();
    company.tags = req.body.tags;
    company.joblinks = req.body.joblinks;
    console.log('New company details:', company);

    company.save(function(err) {
        if (err)
            res.send(err);
        res.json({message: 'company successfully added!'});
    });
});

router.route('/company/:company_slug')
.put(function(req, res) {
    let company = req.body;
    let slug = req.params.company_slug;
    Company.findOneAndUpdate({ slug }, company, 
        function(err, c) {
            if (err)
                res.send(err);
            res.json({message: `company ${slug} has been updated`})
    })
})
.delete(function(req, res) {
    let slug = req.params.company_slug;
    
    company.remove({ slug }, function(err, company) {
        if (err)
            res.send(err);
        res.json({message: 'company has been deleted'})
    })
});

router.route('/tags')
.get(function(req, res) {
    Company.getTagsList()
    .then(tags => {
        res.json(tags);
    })
    .catch(err => {
        console.log(err);
    })
  
});

module.exports = router;