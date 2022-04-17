import { IsString, IsNotEmpty } from 'class-validator';

export class SetDefaultCreditCardDto {
  @IsString()
  @IsNotEmpty()
  paymentMethodId: string;
}

export default SetDefaultCreditCardDto;