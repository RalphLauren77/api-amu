const {
    Schema,
    model,
} = require('mongoose');

const dataSchema = new Schema({
    number: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
    },
    lastTimeUpdate: {
        type: Date,
    },
},
{
    versionKey: false,
    toJSON: {
        virtuals: true,
        transform(doc, ret) {
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
});

const Data = model('data', dataSchema);

module.exports = Data;
