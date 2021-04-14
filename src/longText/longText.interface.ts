import { Document } from 'mongoose';

export interface LongText extends Document {
    readonly title: string;
    readonly body: string;
    readonly pageId: number;
}