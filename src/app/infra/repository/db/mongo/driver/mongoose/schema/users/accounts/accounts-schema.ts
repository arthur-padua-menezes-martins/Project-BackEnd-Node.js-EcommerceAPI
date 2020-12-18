import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  individual: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    cpf: {
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
    }
  },
  accessToken: {
    type: String,
    required: false
  },
  enabled: {
    type: Boolean,
    required: true,
    default: false
  },
  pagSeguro: {
    code: {
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

export default mongoose.model('accounts', schema)
