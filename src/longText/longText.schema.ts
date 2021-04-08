import * as mongoose from 'mongoose';

export const LongTextSchema = new mongoose.Schema({
    title: String,
    body: String,
    pageId: Number
}, { collection: 'longtext' })