'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
const slug = require('slugs');

var CompanySchema = new Schema({
    name: String,
    slug: String,
    describtion: String,
    joblinks: [String], 
    tags: [String],
    location: String
});

CompanySchema.pre('save', async function(next) {
    if (!this.isModified('name')) {
        next(); // skip it
        return; // stop this function from running
    }
    this.slug = slug(this.name);
    console.log('slug', this.slug);
    next();
});

CompanySchema.statics.getTagsList = function() {
    return this.aggregate([
        { $unwind: '$tags' },
        { $group: {_id: '$tags', count: {$sum: 1}} },
        { $sort: { count: -1} }]);
}

module.exports = mongoose.model('Company', CompanySchema);
