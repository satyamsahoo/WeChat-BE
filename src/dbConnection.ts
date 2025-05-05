import mongoose from 'mongoose';
import config from './config/config';

const { dbUsername, dbPassword, dbName } = config;

export const db = mongoose
  .connect(
    `mongodb+srv://${dbUsername}:${dbPassword}@cluster89292.f6yn4.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster89292`,
  )
  .then((res) => {
    if (res) {
      console.log(`Database connected to ${dbName}`);
    }
    console.log('Error while connecting to DB');
  })
  .catch((err: Error) => {
    console.log(err);
  });
