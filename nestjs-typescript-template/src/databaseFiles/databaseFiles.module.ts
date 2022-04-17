import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import DatabaseFile from './databaseFile.entity';
import DatabaseFilesService from './databaseFiles.services';
import DatabaseFilesController from './databaseFilesController';

@Module({
  imports: [
    TypeOrmModule.forFeature([DatabaseFile]),
    ConfigModule,
  ],
  providers: [DatabaseFilesService],
  exports: [DatabaseFilesService],
  controllers: [DatabaseFilesController]
})
export class DatabaseFilesModule {}
