import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  accounts: {
    type: ObjectId,
    ref: 'accounts'
  },
  cart: [{
    products: {
      type: ObjectId,
      ref: 'products'
    },
    variations: {
      type: ObjectId,
      ref: 'variations'
    },
    quantity: {
      type: Number,
      required: true
    },
    unitaryPrice: {
      type: Number,
      required: true
    }
  }],
  payments: {
    type: ObjectId,
    ref: 'payments'
  },
  deliveries: {
    type: ObjectId,
    ref: 'deliveries'
  },
  canceled: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model('requests', schema)
