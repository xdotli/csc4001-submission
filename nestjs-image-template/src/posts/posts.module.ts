import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import Post from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from '../search/search.module';
import PostsSearchService from './postsSearch.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostsResolver } from './posts.resolver';
import { UsersModule } from '../users/users.module';
import PostsLoaders from './loaders/posts.loaders';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          store: redisStore,
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          ttl: 120
        }),
    }),
    TypeOrmModule.forFeature([Post]),
    SearchModule,
    UsersModule,
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsSearchService, PostsResolver, PostsLoaders],
})
export class PostsModule {}
