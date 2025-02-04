import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL || "postgresql://postgres:admin123@db:5432/mydb",
//     ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
// });

const pool = new Pool({



    connectionString: "postgresql://postgres:admin123@db:5432/mydb"
});


export const db = drizzle(pool);