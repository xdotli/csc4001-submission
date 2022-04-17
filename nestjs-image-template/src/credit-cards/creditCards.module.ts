import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module';
import CreditCardsController from './creditCards.controller';

@Module({
  imports: [StripeModule],
  controllers: [CreditCardsController],
  providers: [],
})
export class CreditCardsModule {}
