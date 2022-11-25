import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    links: {
        type: Array,
        unique: true,
        required: true,
    }

})

export default mongoose.models.User || mongoose.model('User', UserSchema)