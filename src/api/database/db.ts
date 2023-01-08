import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

client.connect().then((value) => {
    console.log('Database connected!');
})

export { client };
