import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { EnemyService } from './enemy.service';

@Controller('enemy')
export class EnemyController {
    constructor(private enemyService: EnemyService) { }

    //Retrieve enemy list
    @Get('/all')
    async getAllEnemies(@Res() res) {
        const enemies = await this.enemyService.getAllEnemies();
        return res.status(HttpStatus.OK).json(enemies);
    }

    //Fetch a particular enemy using Id
    @Get('/:enemyPageId')
    async getEnemy(@Res() res, @Param('enemyPageId') enemyPageId) {
        const enemy = await this.enemyService.getEnemy(enemyPageId);
        if (!enemy) throw new NotFoundException('Enemy does not exist!');
        return res.status(HttpStatus.OK).json(enemy);
    }
}
