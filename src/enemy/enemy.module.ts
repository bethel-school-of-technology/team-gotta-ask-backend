import { Module } from '@nestjs/common';
import { EnemyService } from './enemy.service';
import { EnemyController } from './enemy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EnemySchema } from './enemy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Enemy', schema: EnemySchema }])
  ],
  controllers: [EnemyController],
  providers: [EnemyService]
})

export class EnemyModule {}
