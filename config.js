const config = {
  DB_URL:
    process.env.DB_URL ||
    "mongodb+srv://telegram-app:9dpNchGRDuWiQf6H@cluster0-jkcft.mongodb.net/test?retryWrites=true&w=majority/telegrom",
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "http://localhost",
  PUBLIC_ROUTE: process.env.PUBLIC_ROUTE || "/app",
  FILES_ROUTE: process.env.FILES_ROUTE || "files"
};

module.exports = config;