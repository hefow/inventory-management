import dotenv from 'dotenv'

dotenv.config()

export const PORT=process.env.PORT;
export const dbUrl=process.env.MONGO_URI;
export const nodeEnv=process.env.NODE_ENV;
export const jwt_secret=process.env.JWT_SECRET;
