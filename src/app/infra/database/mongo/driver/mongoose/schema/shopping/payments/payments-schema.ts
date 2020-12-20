import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  status: [{
    type: Number,
    required: true
  }],
  method: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  installments: {
    type: Number,
    required: true,
    default: 1
  },
  card: {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    areaCode: {
      type: String,
      required: true
    },
    phone: [{
      type: String,
      required: true
    }],
    birthDay: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
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

export default mongoose.model('payments', schema)
