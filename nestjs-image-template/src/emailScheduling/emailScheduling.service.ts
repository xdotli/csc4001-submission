import { Injectable } from '@nestjs/common';
import EmailService from '../email/email.service';
import EmailScheduleDto from './dto/emailSchedule.dto';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export default class EmailSchedulingService {
  constructor(
    private readonly emailService: EmailService,
    private readonly schedulerRegistry: SchedulerRegistry
  ) {}

  scheduleEmail(emailSchedule: EmailScheduleDto) {
    const date = new Date(emailSchedule.date);
    const job = new CronJob(date, () => {
      this.emailService.sendMail({
        to: emailSchedule.recipient,
        subject: emailSchedule.subject,
        text: emailSchedule.content
      })
    });

    this.schedulerRegistry.addCronJob(`${Date.now()}-${emailSchedule.subject}`, job);
    job.start();
  }
}
