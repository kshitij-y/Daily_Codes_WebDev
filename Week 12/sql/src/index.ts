import { Client } from 'pg';

const client = new Client({
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

async function getUserAddress() {
    try {
        await client.connect();
        
        const result = await client.query(`
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
    } catch (err) {
        console.error("Error fetching user addresses:", err);
    } finally {
        await client.end();
    }
}

getUserAddress();