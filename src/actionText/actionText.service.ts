import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ActionText } from './actionText.interface';

@Injectable()
export class ActionTextService {
    constructor(@InjectModel('ActionText') private readonly actionTextModel: Model<ActionText>) { }
    
    // Fetch all text bodies
    async getAllTextBodies(): Promise<ActionText[]> {
        const texts = await this.actionTextModel.find().exec();
        return texts;
    }

    // Get a single text body
    async getTextBody(actionTextPageId): Promise<ActionText> {
        const actionText = await this.actionTextModel.findOne({pageId: actionTextPageId}).exec();
        return actionText;
    }
}
