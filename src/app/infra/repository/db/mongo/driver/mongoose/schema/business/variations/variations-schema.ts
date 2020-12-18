import mongoose from 'mongoose'
const { Schema } = mongoose
const { Types: { ObjectId } } = Schema

const schema = new Schema({
  code: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  defaultPrice: {
    type: String,
    required: true
  },
  images: [{
    url: {
      type: String,
      required: true
    }
  }],
  quantityInStock: {
    type: Number,
    required: true
  },
  quantityInTransaction: {
    type: Number,
    required: true
  },
  informations: {
    deliveries: {
      dimensions: {
        width: {
          type: Number,
          required: true
        },
        height: {
          type: Number,
          required: true
        },
        length: {
          type: Number,
          required: true
        },
        weight: {
          type: Number,
          required: true
        }
      },
      freeShipping: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    tickets: [{
      name: {
        type: String
      },
      discount: {
        type: Number
      }
    }]
  },
  availability: {
    type: Boolean,
    required: true
  },
  products: {
    type: ObjectId,
    ref: 'products'
  }
}, {
  timestamps: true
})

export default mongoose.model('variations', schema)
