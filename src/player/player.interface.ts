import { Document } from 'mongoose';

export interface Player extends Document {
    id: number;
    name: string;
    hp: number;
    attack: number;
    pageId: number;
}