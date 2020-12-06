import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const getUserByEmail = async (email, usePassword) => {
  if (usePassword) {
    return User.findOne(email).select('+password');
  }
  return User.findOne(email);
};

export const getUserById = async (id) => User.findById(id);

export const listUsers = async () => User.find();
