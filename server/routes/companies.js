const Company = require('../models/Company');
const Review = require('../models/Review');
const Tag = require('../models/Tag');

const tagSlavery = new Tag({
    name: 'Slavery',
    votes: 3
});

const tagCarbon = new Tag({
    name: 'Large carbon footprint',
    votes: 12
});

const reviewApple1 = new Review({
    timestamp: '2021-09-15',
    trashiness: 4,
    description: 'pear was better',
    tags: [tagSlavery, tagCarbon]
});

const reviewApple2 = new Review({
    timestamp: '2021-09-18',
    trashiness: 2,
    description: 'granny smith apples are good for pies',
    tags: [tagSlavery]
});

const apple = new Company({
    name: 'Apple',
    industry: 'Software',
    reviews: [reviewApple1, reviewApple2],
    tags: [tagSlavery, tagCarbon]
});

const reviewMicrosoft1 = new Review({
    timestamp: '2021-09-17',
    trashiness: 1,
    description: 'microhard',
    tags: [tagCarbon]
})

const microsoft = new Company({
    name: 'Microosft',
    industry: 'Microsoft',
    reviews: [reviewMicrosoft1],
    tags: [tagCarbon]
})

module.exports = function(app) {
    app.get('/companies', function(req, res) {
        res.send([apple, microsoft]);
    }); 

    app.get('/companies/:name', function(req, res) {
        if (req.params.name == 'Apple') {
            res.send(apple);
        } else {
            res.send(microsoft);
        }
    });
}