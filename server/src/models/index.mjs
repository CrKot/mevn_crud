import mongoose from 'mongoose';

const schema = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};

export default mongoose.model('task', schema);
