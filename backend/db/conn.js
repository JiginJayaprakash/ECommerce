const { mongoose } = require('mongoose');

var _db;
module.exports = {
    connectDB: async () => {
        try {
            const uri = "mongodb+srv://test1:test1@cluster0.m4t5d2m.mongodb.net/Cluster0?retryWrites=true&w=majority";
            _db = await mongoose.connect(uri);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to mongo', error);
        }
    },
    getDb:()=> {
        return _db;
    }
};
