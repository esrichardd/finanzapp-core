import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => {
  return {
    postgres: {
      database: process.env.POSTGRES_DB,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
    },
  };
});
