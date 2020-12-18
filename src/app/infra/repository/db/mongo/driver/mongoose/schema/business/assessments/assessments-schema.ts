import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  assessment: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true,
    default: 0
  },
  accounts: {
    type: ObjectId,
    ref: 'accounts'
  },
  products: {
    type: ObjectId,
    ref: 'products'
  }
}, {
  timestamps: true
})

export default mongoose.model('assessments', schema)
