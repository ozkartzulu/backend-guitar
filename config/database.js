module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cerm2a9a6gdte4gasli0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_cir6'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'JYYlY183OtB8fQGCGVeMFfAT7wPjJHRh'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
