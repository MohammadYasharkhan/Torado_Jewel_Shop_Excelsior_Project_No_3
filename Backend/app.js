import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { userRoutes } from "./src/routes/userRoutes.js";
import { newsletterRoutes } from "./src/routes/newLetterRoutes.js";
import { db_object } from "./src/configs/dbConfig.js";
import migrate from "./src/configs/dbMigration.js";
const port = 4000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
    cors({
        origin: "http://localhost:5173", // frontend URL
        credentials: true,               // allow cookies
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'src','uploads')));
app.use("/user", userRoutes);
app.use("/newsletter", newsletterRoutes);


const errorHandler = (err, req, res, next) => {
    console.error(err);
    const statusCode = typeof err.code === 'number' ? err.code : 500;

    return res.status(statusCode).json({
        data: null,
        status: {
            code: err.code || 500,
            status: err.status || 'FAILED',
            description: err.description || 'INTERNAL SERVER ERROR',
        }
    });
};
app.use(errorHandler);

(async () => {
    try {
        await db_object.query("SELECT 1");
        console.log("DB connected successfully");
        await migrate(); // wait for DB + procedures to be ready
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error("server not started:", err);
        process.exit(1);
    }
})();
