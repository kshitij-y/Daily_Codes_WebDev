import {Client} from 'pg'
const client = new Client({
    connectionString: "postgresql://test1_owner:XV7tWKoP5abR@ep-billowing-scene-a5zeouod.us-east-2.aws.neon.tech/test1?sslmode=require"
})

// client.connect();

// async function createUsertable() {
//     await client.connect();
//     const result = await client.query(`
//         CREATE TABLE users (
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)

//     console.log(result )
// }

//createUsertable();

async function insertIntoUserTable(username: string, email: string, password: string) {
    await client.connect();
    const result = await client.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`, [username, email, password]
    )
    console.log(result);
}
insertIntoUserTable("kshtij_Kumar", "kshitijyadav2003@gmail.com", "kshitij_1234567890");