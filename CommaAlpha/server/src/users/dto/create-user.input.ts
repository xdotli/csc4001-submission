import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
