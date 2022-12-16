const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// syntax module.exports = mongoose.model('model ka name',schema ka name)
module.exports = mongoose.model("notes", NotesSchema);
