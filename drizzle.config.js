/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js", // Path to your schema file
    dialect: "postgresql",       // Set database dialect
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_Qn9MbipsP7TY@ep-young-lab-a5ligr8p-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
    },
};