const mongoose = require('mongoose');

module.exports = {
    port: 9898,
    db: mongoose,
    connection: "mongodb://localhost:27017/integracionopensource"
    //  connection :"mongodb://root:root@ds117859.mlab.com:17859/integracionopensource"
};
