/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { EnemyModule } from './enemy/enemy.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gawRPG:gottaaskthewife1@rpgbackend.utmkn.mongodb.net/rpgBackend?retryWrites=true&w=majority'), PlayerModule, EnemyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
