import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';
import SubscriptionsController from './subscriptions.controller';
import SubscriptionsService from './subscriptions.service';

@Module({
  imports: [StripeModule, ConfigModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
