import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  status: [{
    type: Number,
    required: true
  }],
  type: {
    type: Boolean,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  deadline: {
    type: Number,
    required: true
  },
  trackingCode: {
    type: String,
    required: false,
    default: null
  },
  address: {
    cep: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  requests: {
    type: ObjectId,
    ref: 'requests'
  }
}, {
  timestamps: true
})

export default mongoose.model('deliveries', schema)
