import mongoose from "mongoose";


const messageSchema = mongoose.Schema({
    message : { type: String, required: true },
    mood : { type: String, required: true },
});


export default mongoose.model('Message', messageSchema);