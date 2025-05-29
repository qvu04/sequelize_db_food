import express from 'express';
import { Sequelize } from 'sequelize';
import initModels from './src/models/init-models';
import rootRouter from './src/routers/root.router';

const app = express();

app.use(express.json());

const DATABASE_URL = "mysql://root:1234@localhost:3307/db_restaurant";

const sequelize = new Sequelize(DATABASE_URL, { logging: false });

// sequelize-auto -h localhost -d db_restaurant -u root -x 1234 -p 3307  --dialect mysql -o ./models -l esm
export const models = initModels(sequelize);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(rootRouter);




app.listen(3069, () => {
    console.log('🚀 Server running on port http://localhost:3069');
})