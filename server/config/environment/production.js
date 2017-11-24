'use strict';

// Production specific configuration
// =================================
module.exports = {
        // Server IP
        ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

        // Server port
        port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,

        // MongoDB connection options
        mongo: {
                uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME ||
                //'mongodb://localhost/paizaqa'
                'mongodb://shauncfranks1124:BumbleBeeMaximusPrime4211@ourstory-shard-00-00-bz49z.mongodb.net:27017,ourstory-shard-00-01-bz49z.mongodb.net:27017,ourstory-shard-00-02-bz49z.mongodb.net:27017/test?ssl=true&replicaSet=ourstory-shard-0&authSource=admin'
        }
};
//# sourceMappingURL=production.js.map
