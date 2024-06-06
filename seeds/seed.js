const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const PostData = require('./postData.json');
const { error } = require('console');

const seedDatabase = async () => {
await sequelize.sync({ force: true });

console.log ('data seeded');

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const newPost of PostData) {
    await Post.create({
      ...newPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0)
};


seedDatabase();