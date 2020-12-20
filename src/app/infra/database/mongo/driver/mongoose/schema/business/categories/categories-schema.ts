import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  tags: [{
    type: Array,
    required: true,
    default: []
  }],
  availability: {
    type: Boolean,
    required: true,
    default: true
  },
  products: [{
    type: ObjectId,
    ref: 'products'
  }]
}, {
  timestamps: true
})

export default mongoose.model('categories', schema)
