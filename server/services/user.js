import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return (await User.findOne(email)).isSelected('+password');
  }
  return User.findOne(email);
};

export const listUsers = async () => User.find();
