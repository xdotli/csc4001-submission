import { IsString, IsNotEmpty } from 'class-validator';

export class AddCreditCardDto {
  @IsString()
  @IsNotEmpty()
  paymentMethodId: string;
}

export default AddCreditCardDto;