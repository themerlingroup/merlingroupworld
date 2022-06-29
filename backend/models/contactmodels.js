const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema ({
    name: {
        type: String,
        trim: true
    },
    email: {
        type:String,
        trim: true,
        minlength: 3
    },
    phone: {
        type: Number,
        trim: true,
        minlength: 7
    },
}, {
    timestamps: true,
});
const User = mongoose.model('User', contactSchema);
module.exports = User;
