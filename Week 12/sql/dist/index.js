"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecret@localhost:5432/postgres"
});
// async function createUsersTable() {
//     try {
//         await client.connect();
//         const result = await client.query(`
//             CREATE TABLE IF NOT EXISTS users (
//                 id SERIAL PRIMARY KEY,
//                 username VARCHAR(50) UNIQUE NOT NULL,
//                 email VARCHAR(255) UNIQUE NOT NULL,
//                 password VARCHAR(255) NOT NULL,
//                 created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
//             );
//         `);
//         console.log("Table created or already exists:", result);
//     } catch (err) {
//         console.error("Error creating table:", err);
//     } finally {
//         await client.end();
//     }
// }
// createUsersTable();
// async function insertUserData(username: string, password: string, email: string) {
//     try {
//         await client.connect();
//         const result = await client.query(`
//             INSERT INTO users (username, password, email)
//             VALUES($1, $2, $3)`, [username, password, email]
//         );
//         console.log("Inserted", result.command);
//     } catch (err) {
//         console.error("Error insertinf into table:", err);
//     } finally {
//         await client.end();
//     }
// }
// insertUserData("kshitij2", "kshitij101", "kshitij2@gmail.com");
// async function showUsersData() {
//     try {
//         await client.connect();
//         const result = await client.query(`
//             SELECT * FROM users;
//         `);
//         console.log("Retrieved Users:", result.rows);
//     } catch (err) {
//         console.error("Error retrieving data from table:", err);
//     } finally {
//         await client.end();
//     }
// }
// showUsersData();
function getUserAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const result = yield client.query(`
            SELECT 
                users.id,
                users.username,
                users.email,
                address.city,
                address.country,
                address.pincode
            FROM 
                users
            JOIN 
                address ON users.id = address.user_id;
        `);
            console.log("User Address Data:", result.rows);
        }
        catch (err) {
            console.error("Error fetching user addresses:", err);
        }
        finally {
            yield client.end();
        }
    });
}
getUserAddress();
