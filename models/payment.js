import mongoose from 'mongoose';

// Modelo de pago
const paymentSchema = new mongoose.Schema({
  paymentId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;