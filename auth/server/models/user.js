const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
   email: {
      type: String,
      unique: true,
      lowercase: true
   },
   password: String
});

// On Save Hook, encrypt password
userSchema.pre('save', async function(next) {
   try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);

      this.password = hash;

      next();
   } catch (err) {
      next(err);
   }
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
