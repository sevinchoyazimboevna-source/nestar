import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import {GraphQLModule} from "@nestjs/graphql"
import { ApolloDriver} from "@nestjs/apollo"
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load en variables from env file
    GraphQLModule.forRoot({ // bu Graphql ni ishga tushuradi va schemani avtomatik yaratadi
      driver: ApolloDriver, 
      playground: true, 
      uploads: false,// faylarni yuklashni ochiradi
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
