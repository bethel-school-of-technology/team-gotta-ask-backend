import { Document } from 'mongoose';

export interface Enemy extends Document {
    readonly name: string;
    readonly hp: number;
    readonly attack: number;
}