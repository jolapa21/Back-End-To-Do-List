'use strict';

const faker = require('faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const todos = Array.from({ length: 10 }, () => ({
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      isCompleted: faker.datatype.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('todos', todos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('todos', null, {});
  }
};