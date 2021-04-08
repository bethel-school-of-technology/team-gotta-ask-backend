import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { LongTextService } from './longText.service';

@Controller('longText')
export class LongTextController {
    constructor(private longTextService: LongTextService) { }

    //Retrieve text bodies list
    @Get('/text')
    async getAllTextBodies(@Res() res) {
        const textBodies = await this.longTextService.getAllTextBodies();
        return res.status(HttpStatus.OK).json(textBodies);
    }

    //Fetch a particular text body using title
    @Get('/:title')
    async getTextBody(@Res() res, @Param('title') title) {
        const text = await this.longTextService.getTextBody(title);
        if (!text) throw new NotFoundException('Text Body does not exist!');
        return res.status(HttpStatus.OK).json(text);
    }
}
