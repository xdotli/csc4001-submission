import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;
}
