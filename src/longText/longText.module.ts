import { Module } from '@nestjs/common';
import { LongTextService } from './longText.service';
import { LongTextController } from './longText.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LongTextSchema } from './longText.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LongText', schema: LongTextSchema }])
  ],
  controllers: [LongTextController],
  providers: [LongTextService]
})

export class LongTextModule {}
