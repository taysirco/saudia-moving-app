import mongoose from 'mongoose'

const advertisementSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  description: String,
  phoneNumber: String,
  whatsappNumber: String,
  cities: [{
    type: String,
    required: true
  }],
  services: [{
    type: String,
    required: true
  }],
  rating: {
    type: Number,
    default: 5
  },
  reviewsCount: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  priority: {
    type: Number,
    default: 1
  },
  startDate: Date,
  endDate: Date,
  active: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  },
  icons: [{
    name: String,
    color: String
  }],
  animationSettings: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  planDetails: {
    name: String,
    nameAr: String,
    price: Number,
    duration: Number,
    features: [String],
    maxCities: Number,
    isFeatured: Boolean,
    maxImages: Number
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  views: {
    type: Number,
    default: 0
  },
  clicks: {
    type: Number,
    default: 0
  },
  whatsappClicks: {
    type: Number,
    default: 0
  },
  phoneClicks: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

export const Advertisement = mongoose.models.Advertisement || mongoose.model('Advertisement', advertisementSchema) 