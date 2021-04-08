import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { LongTextService } from './longText.service';

@Controller('longText')
export class LongTextController {
    constructor(private longTextService: LongTextService) { }

    //Retrieve text bodies list
    @Get('/all')
    async getAllTextBodies(@Res() res) {
        const textBodies = await this.longTextService.getAllTextBodies();
        return res.status(HttpStatus.OK).json(textBodies);
    }

    //Fetch a particular text body using pageId
    @Get('/:pageId')
    async getTextBody(@Res() res, @Param('pageId') pageId) {
        const text = await this.longTextService.getTextBody(pageId);
        if (!text) throw new NotFoundException('Text Body does not exist!');
        return res.status(HttpStatus.OK).json(text);
    }
}
