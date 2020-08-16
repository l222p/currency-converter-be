import dotenv from 'dotenv';

dotenv.config();

export const {
    COUNTRIES_BASE_URL,
    EXHANGE_RATE_BASE_URL,
    EXCHANGE_API_KEY,
    BASE_CURRENCY,
    JWT_SECRET
} = process.env;


export const users = [
    {
        username: 'admin',
        password: 'password'
    },
    {
        username: 'user',
        password: 'password'
    }
]


