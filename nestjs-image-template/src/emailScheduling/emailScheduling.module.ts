import { Module } from '@nestjs/common';
import EmailSchedulingService from './emailScheduling.service';
import { EmailModule } from '../email/email.module';
import EmailSchedulingController from './emailScheduling.controller';

@Module({
  imports: [EmailModule],
  controllers: [EmailSchedulingController],
  providers: [EmailSchedulingService],
})
export class EmailSchedulingModule {}
