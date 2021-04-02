/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerController } from './player/player.controller';
import { PlayerModule } from './player/player.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://gawRPG:gottaaskthewife1@rpgbackend.utmkn.mongodb.net/rpgBackend?retryWrites=true&w=majority'), PlayerModule],
  controllers: [AppController, PlayerController],
  providers: [AppService],
})
export class AppModule {}
