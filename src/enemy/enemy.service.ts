import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Enemy } from './enemy.interface';

@Injectable()
export class EnemyService {
    constructor(@InjectModel('Enemy') private readonly enemyModel: Model<Enemy>) { }
    
    // Fetch all enemies
    async getAllEnemies(): Promise<Enemy[]> {
        const enemies = await this.enemyModel.find().exec();
        return enemies;
    }

    // Get a single enemy
    async getEnemy(enemyPageId): Promise<Enemy> {
        const enemy = await this.enemyModel.findOne({pageId: enemyPageId}).exec();
        return enemy;
    }
}