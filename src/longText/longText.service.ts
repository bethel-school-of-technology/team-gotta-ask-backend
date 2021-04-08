import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LongText } from './longText.interface';

@Injectable()
export class LongTextService {
    constructor(@InjectModel('LongText') private readonly longTextModel: Model<LongText>) { }
    
    // Fetch all text bodies
    async getAllTextBodies(): Promise<LongText[]> {
        const texts = await this.longTextModel.find().exec();
        return texts;
    }

    // Get a single text body
    async getTextBody(longTextPageId): Promise<LongText> {
        const longText = await this.longTextModel.findOne({pageId: longTextPageId}).exec();
        return longText;
    }
}
