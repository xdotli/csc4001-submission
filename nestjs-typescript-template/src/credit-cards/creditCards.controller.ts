import { Body, Controller, Post, Req, UseGuards, Get, HttpCode } from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import RequestWithUser from '../authentication/requestWithUser.interface';
import StripeService from '../stripe/stripe.service';
import AddCreditCardDto from './dto/addCreditCardDto';
import SetDefaultCreditCardDto from './dto/setDefaultCreditCard.dto';
import { EmailConfirmationGuard } from '../emailConfirmation/emailConfirmation.guard';

@Controller('credit-cards')
export default class CreditCardsController {
  constructor(
    private readonly stripeService: StripeService
  ) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async addCreditCard(@Body() creditCard: AddCreditCardDto, @Req() request: RequestWithUser) {
    return this.stripeService.attachCreditCard(creditCard.paymentMethodId, request.user.stripeCustomerId);
  }

  @Post('default')
  @HttpCode(200)
  @UseGuards(JwtAuthenticationGuard)
  async setDefaultCard(@Body() creditCard: SetDefaultCreditCardDto, @Req() request: RequestWithUser) {
    await this.stripeService.setDefaultCreditCard(creditCard.paymentMethodId, request.user.stripeCustomerId);
  }

  @Get()
  @UseGuards(EmailConfirmationGuard)
  @UseGuards(JwtAuthenticationGuard)
  async getCreditCards(@Req() request: RequestWithUser) {
    return this.stripeService.listCreditCards(request.user.stripeCustomerId);
  }
}
