const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vaccine', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
