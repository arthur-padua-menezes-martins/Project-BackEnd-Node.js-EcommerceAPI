import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  reference: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    required: true
  }],
  availability: {
    type: Boolean,
    required: true
  },
  categories: {
    type: ObjectId,
    ref: 'categories'
  },
  variations: {
    type: ObjectId,
    ref: 'variations'
  },
  assessments: {
    type: ObjectId,
    ref: 'assessments'
  }
}, {
  timestamps: true
})

export default mongoose.model('products', schema)
