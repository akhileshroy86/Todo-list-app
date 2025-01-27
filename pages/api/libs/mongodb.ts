import mongoose, { Connection } from 'mongoose';

// MongoDB connection function
const connectToDatabase = async (): Promise<Connection> => {
  const uri: string = '';

  try {
    const connection = await mongoose.connect(uri, { });
    console.log('Connected to MongoDB');
    return connection.connection; // Returns the mongoose connection instance
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');
  }
};

export default connectToDatabase;
