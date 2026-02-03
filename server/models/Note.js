const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    senderName: {
      type: String,
      required: true,
      trim: true,
    },
    recipientName: {
      type: String,
      trim: true,
      default: 'My Valentine',
    },
    dayName: {
      type: String,
      required: true,
      // e.g. "Rose Day", "Chocolate Day", "Valentine's Day"
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;