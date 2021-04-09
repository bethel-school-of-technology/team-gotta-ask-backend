import * as mongoose from 'mongoose';

export const ActionTextSchema = new mongoose.Schema({
    title: String,
    body: String,
    pageId: Number
}, { collection: 'actiontext' })