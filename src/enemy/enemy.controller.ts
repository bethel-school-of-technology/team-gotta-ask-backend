import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { EnemyService } from './enemy.service';

@Controller('enemy')
export class EnemyController {
    constructor(private enemyService: EnemyService) { }

    //Retrieve enemy list
    @Get('/enemies')
    async getAllEnemies(@Res() res) {
        const enemies = await this.enemyService.getAllEnemies();
        return res.status(HttpStatus.OK).json(enemies);
    }

    //Fetch a particular enemy using Id
    @Get('/:enemyName')
    async getEnemy(@Res() res, @Param('enemyName') enemyName) {
        const enemy = await this.enemyService.getEnemy(enemyName);
        if (!enemy) throw new NotFoundException('Enemy does not exist!');
        return res.status(HttpStatus.OK).json(enemy);
    }
}
