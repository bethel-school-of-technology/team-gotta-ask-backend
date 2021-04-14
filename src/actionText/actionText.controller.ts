import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { ActionTextService } from './actionText.service';

@Controller('actionText')
export class ActionTextController {
    constructor(private actionTextService: ActionTextService) { }

    //Retrieve text bodies list
    @Get('/all')
    async getAllTextBodies(@Res() res) {
        const textBodies = await this.actionTextService.getAllTextBodies();
        return res.status(HttpStatus.OK).json(textBodies);
    }

    //Fetch a particular text body using pageId
    @Get('/:pageId')
    async getTextBody(@Res() res, @Param('pageId') pageId) {
        const text = await this.actionTextService.getTextBody(pageId);
        if (!text) throw new NotFoundException('Text Body does not exist!');
        return res.status(HttpStatus.OK).json(text);
    }
}
