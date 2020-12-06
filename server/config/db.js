import mongoose from 'mongoose';

const connectDatabase = async () => {
  let dbConnection;
  try {
    dbConnection = await mongoose.connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Successfully connected to mongodb cloud ${dbConnection.connection.host}`);
};

export default connectDatabase;
