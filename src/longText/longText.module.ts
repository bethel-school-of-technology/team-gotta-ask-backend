import { Module } from '@nestjs/common';
import { LongTextController } from './longText.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LongTextSchema } from './longText.schema';
import { LongTextService } from './longText.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LongText', schema: LongTextSchema }])
  ],
  controllers: [LongTextController],
  providers: [LongTextService]
})

export class LongTextModule {}
