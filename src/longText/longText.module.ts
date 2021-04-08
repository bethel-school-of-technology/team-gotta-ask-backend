import { Module } from '@nestjs/common';
import { LongTextService } from './longText.service';

@Module({
  providers: [LongTextService]
})
export class LongTextModule {}
