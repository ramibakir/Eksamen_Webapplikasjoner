import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const getUserByEmail = async (email, usePassword) => User.findOne(email);

export const listUsers = async () => User.find();
