import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    hp: Number,
    attack: Number,
    pageId: Number
})