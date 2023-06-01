import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_DB_STRING = process.env.MONGO_DB_STRING || '';
const DATA_BASE_NAME = process.env.MONGO_DB_NAME || '';

console.log(process.env.MONGO_PASSWORD)

console.log(`DataBase Username: ${MONGO_USERNAME}\nDataBase Password: ${MONGO_PASSWORD}`);

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${DATA_BASE_NAME}.${MONGO_DB_STRING}.mongodb.net/`;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};