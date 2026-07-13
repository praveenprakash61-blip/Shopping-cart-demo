import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'qa';

dotenv.config({
  path: `config/.env.${environment}`
});

export const env = {
  baseURL: process.env.BASE_URL!
};