const mongooose = require('mongoose');
 const userSchema = new mongooose.Schema({
     fullName: {
        type: String,
        required: true
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true,
     },
     role: {
        type: String,
        required: true,
        default: 'Normal'
     },
     profilepicture: {
        type: String,
      
     }
})

const User = mongoose.model('User', userSchema);

module.exports = User;