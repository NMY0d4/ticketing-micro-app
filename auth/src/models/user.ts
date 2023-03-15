import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = mongoose.model('User', userSchema);

// new User({
//   email: 'test@test.com',
//   password: 'password'
// })

export { User };
