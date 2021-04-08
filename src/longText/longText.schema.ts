import * as mongoose from 'mongoose';

export const longTextSchema = new mongoose.Schema({
    title: String,
    body: String,
    pageId: Number
})