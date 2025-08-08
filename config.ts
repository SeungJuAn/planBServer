const serverConfig = {
  DB_HOST: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
  DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  DB_USER: process.env.DB_USER ? process.env.DB_USER : 'root',
  DB_PASS: process.env.DB_PASS,
};

export default serverConfig;
