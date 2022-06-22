const config = {
    appConfig: {
      port: process.env.PORT || 5000,
      host: process.env.APP_HOST || '0.0.0.0'
    },
    dbConfig: {
      url: process.env.MONGO_URI,
      
    }
  }
  
  module.exports = config