'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Jobs', {
      fields: ['authorId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_authorId',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Jobs', 'custom_fkey_constraint_authorId', {})
  }
};
