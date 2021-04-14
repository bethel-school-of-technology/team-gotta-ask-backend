import { Document } from 'mongoose';

export interface ActionText extends Document {
    readonly title: string;
    readonly body: string;
    readonly pageId: number;
}