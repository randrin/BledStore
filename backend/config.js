import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID
}

export const modalMessage = {
    USER_NOT_FOUND: 'User not found. Try agian.',
    INVALID_PASSWORD: 'Invalid Password. Try again.'
}