import { Document } from 'mongoose';

export interface Player extends Document {
    readonly id: number;
    readonly name: string;
    readonly hp: number;
    readonly attack: number;
    readonly pageId: number;
}