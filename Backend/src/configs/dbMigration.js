import fs from "fs";
import path from "path";
import { db_object } from "./dbConfig.js";

async function migrate() {
        await db_object.query(`CREATE DATABASE IF NOT EXISTS tornado_db`);
        await db_object.query(`USE tornado_db`);

        // FOR SINGLE FILE
        // const procedurePath = path.join(process.cwd(), "procedures/user.sql");
        // const procedureSQL = fs.readFileSync(procedurePath, "utf8");
        // await db_object.query(procedureSQL);


        const proceduresDir = path.join(process.cwd(), "src/procedures");
        const files = fs.readdirSync(proceduresDir)
            .filter((file) => file.endsWith(".sql"))
            .sort();

        let allSQL = "";

        for (const file of files) {
            const filePath = path.join(proceduresDir, file);
            allSQL += fs.readFileSync(filePath, "utf8") + "\n";
        }

        await db_object.query(allSQL);

        console.log("Migration completed successfully");
};


export default migrate;