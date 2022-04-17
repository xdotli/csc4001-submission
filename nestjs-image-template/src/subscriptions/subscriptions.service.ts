import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import StripeService from '../stripe/stripe.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class SubscriptionsService {
  constructor(
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService
  ) {}

  public async createMonthlySubscription(customerId: string) {
    const priceId = this.configService.get('MONTHLY_SUBSCRIPTION_PRICE_ID');

    const subscriptions = await this.stripeService.listSubscriptions(priceId, customerId);
    if (subscriptions.data.length) {
      throw new BadRequestException('Customer already subscribed');
    }
    return this.stripeService.createSubscription(priceId, customerId);
  }

  public async getMonthlySubscription(customerId: string) {
    const priceId = this.configService.get('MONTHLY_SUBSCRIPTION_PRICE_ID');
    const subscriptions = await this.stripeService.listSubscriptions(priceId, customerId);

    if (!subscriptions.data.length) {
      return new NotFoundException('Customer not subscribed');
    }
    return subscriptions.data[0];
  }
}
