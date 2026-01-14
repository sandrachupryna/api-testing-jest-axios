const { faker } = require('@faker-js/faker');

const testData = {
    validPost: {
        userId: 1,
        title: faker.lorem.sentence(5),
        body: faker.lorem.text(),
        publishedAt: faker.date.recent().toISOString()
    },

    updatePost: {
        userId: 1,
        title: faker.lorem.sentence(5),
        body: faker.lorem.text(),
        publishedAt: faker.date.recent().toISOString()
    }
}

module.exports = testData;
