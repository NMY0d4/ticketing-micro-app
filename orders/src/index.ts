import mongoose from 'mongoose';
import { app } from './app';
import { natsWrapper } from './nats-wrapper';

const pe = process.env;

const start = async () => {
  if (!pe.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!pe.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }
  if (!pe.NATS_CLIENT_ID) {
    throw new Error('NATS_CLIENT_ID must be defined');
  }
  if (!pe.NATS_URL) {
    throw new Error('NATS_URL must be defined');
  }
  if (!pe.NATS_CLUSTER_ID) {
    throw new Error('NATS_CLUSTER_ID must be defined');
  }

  try {
    await natsWrapper.connect(
      pe.NATS_CLUSTER_ID,
      pe.NATS_CLIENT_ID,
      pe.NATS_URL
    );

    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!');
      process.exit();
    });

    process.on('SIGINT', () => natsWrapper.client.close());
    process.on('SIGTERM', () => natsWrapper.client.close());

    await mongoose.connect(pe.MONGO_URI);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.error(error);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
  });
};

start();
