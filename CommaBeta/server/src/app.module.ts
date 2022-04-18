import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ChatsModule } from './chats/chats.module';
import { EmailModule } from './email/email.module';
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module';
import * as Joi from '@hapi/joi';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    GraphQLModule.forRoot({
      validationSchema: Joi.object({
        GRAPHQL_PLAYGROUND: Joi.number(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    ChatsModule,
    EmailModule,
    EmailConfirmationModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
