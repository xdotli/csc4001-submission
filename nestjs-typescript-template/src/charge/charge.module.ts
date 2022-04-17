import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module';
import ChargeController from './charge.controller';

@Module({
  imports: [StripeModule],
  controllers: [ChargeController],
  providers: [],
})
export class ChargeModule {}
