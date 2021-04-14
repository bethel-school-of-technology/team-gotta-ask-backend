import { Module } from '@nestjs/common';
import { ActionTextService } from './actionText.service';
import { ActionTextController } from './actionText.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionTextSchema } from './actionText.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ActionText', schema: ActionTextSchema }])
  ],
  controllers: [ActionTextController],
  providers: [ActionTextService]
})

export class ActionTextModule {}
