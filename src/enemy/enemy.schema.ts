import * as mongoose from 'mongoose';

export const EnemySchema = new mongoose.Schema({
    name: String,
    hp: Number,
    attack: Number,
    pageId: Number
}, { collection: 'enemies'})