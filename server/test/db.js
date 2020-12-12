import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongoServer = new MongoMemoryServer();
const opts = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const connectToDB = async () => {
  const mongoUri = await mongoServer.getUri();

  try {
    await mongoose.connect(mongoUri, opts);
  } catch (err) {
    console.log(err.message);
  }
};

export const closeDB = async (done) => {
  await mongoose.disconnect(done);
  await mongoServer.stop();
};
