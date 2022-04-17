import { Module } from '@nestjs/common';
import { OptimizeController } from './optimize.controller';
import { BullModule } from '@nestjs/bull';
import { join } from 'path';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'image',
      processors: [{
        name: 'optimize',
        path: join(__dirname, 'image.processor.js')
      }],
    })
  ],
  providers: [],
  exports: [],
  controllers: [OptimizeController]
})
export class OptimizeModule {}
