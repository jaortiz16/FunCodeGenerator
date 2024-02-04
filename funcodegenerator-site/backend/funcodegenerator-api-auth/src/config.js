import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://Andres:andres246@funcodegenerator-auth.mj9wikk.mongodb.net/?retryWrites=true&w=majority";
export const PORT = process.env.PORT || 4000;
export const SECRET = "aoaabc";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@funcodegenerator.com";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";