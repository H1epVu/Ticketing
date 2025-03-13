import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

jest.mock('../nats-wrapper');

let mongo: MongoMemoryServer;

beforeAll(async () => {
    process.env.JWT_KEY = 'secret';

    mongo = new MongoMemoryServer();
    
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    jest.clearAllMocks();
    const db = mongoose.connection.db;
    if (!db) {
        throw new Error('Database connection is not established');
    }
    const collections = await db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});