import * as mongoose from 'mongoose'

interface BookingDetail {
  bizItemId: string
  slotId: string
  slotMapId: string
}

export interface IBooking extends mongoose.Document {
  bookingId: string
  booking: [BookingDetail]
  createdAt: Date
}

const BookingDetailSchema: mongoose.Schema = new mongoose.Schema({
  bizItemId: { type: String },
  slotMapId: { type: String },
  slotIds: { type: [String] },
})

const BookingSchema: mongoose.Schema = new mongoose.Schema({
  bookingId: { type: Number, required: true, unique: true },
  booking: { type: BookingDetailSchema },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model<IBooking>('Booking', BookingSchema)
