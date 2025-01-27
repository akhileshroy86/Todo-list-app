import mongoose, { Connection } from 'mongoose';

// MongoDB connection function
const connectToDatabase = async (): Promise<Connection> => {
  const uri: string = 'mongodb+srv://devarashettyakhileshroy:h5qDdZGwlroLyXoW@cluster0.nr4oq.mongodb.net/';

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
