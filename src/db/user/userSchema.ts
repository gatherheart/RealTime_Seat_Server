import * as mongoose from 'mongoose'
import { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  email: string
  userName: string
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
})

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema)