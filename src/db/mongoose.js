



const mongoose = require('mongoose');
const databaseName = 'taskManagerDatabseApi';
// the name is different than mongodb database
const connectionUrl = 'mongodb://127.0.0.1:27017';
mongoose.connect(
    connectionUrl + '/' + databaseName,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,// due to current Server Discovery and Monitoring engine is deprecated
        useFindAndModify: false // to avoid depcrecation warning

    }

)








