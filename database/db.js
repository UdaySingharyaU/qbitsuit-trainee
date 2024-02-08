import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://udaysingh:hZi68bGMf9LmZ7SG@cluster0.wvpotiy.mongodb.net/qbitsuitDatabase';
    try {
        mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;