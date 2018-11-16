const env = process.env;

module.exports = {
  mongodbUri: 'mongodb://root:root2018@ds053128.mlab.com:53128/recipe_box',
  port: env.PORT || 5000,
  host: env.HOST || '0.0.0.0',
  
  get serverUrl(){
    return 'http://' + this.host + ':' + this.port;
  }
};