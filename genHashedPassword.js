import bc from'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const hashedPassword = await bc.hash('1234', parseInt(process.env.SALT_ROUNDS ));
console.log(hashedPassword);