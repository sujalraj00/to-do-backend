import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
import { resolve } from "path";

// Specify the path to the .env file
const result = config({ path: resolve(__dirname, '../.env') });

if (result.error) {
    throw result.error;
}

console.log("NEON_HOST:", process.env.NEON_HOST);
console.log("NEON_PORT:", process.env.NEON_PORT);
console.log("NEON_DATABASE:", process.env.NEON_DATABASE);
console.log("NEON_USER:", process.env.NEON_USER);
console.log("NEON_PASSWORD:", process.env.NEON_PASSWORD);

export default defineConfig({
    dialect: "postgresql",
    schema: "./db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        host: process.env.NEON_HOST || "",
        port: parseInt(process.env.NEON_PORT || "5432"),
        database: process.env.NEON_DATABASE || "",
        user: process.env.NEON_USER || "",
        password: process.env.NEON_PASSWORD || "",
        ssl: true,
    },
});