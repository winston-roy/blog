const { Schema, model } = require('mongoose');

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: 'blogs'
    }
}, { timestamps: true })

const Comment = model('comment', CommentSchema);

module.exports = Comment;