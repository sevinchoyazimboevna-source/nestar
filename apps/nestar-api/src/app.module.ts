import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import {GraphQLModule} from "@nestjs/graphql"
import { ApolloDriver} from "@nestjs/apollo"
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { T } from './libs/types/common';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load en variables from env file
    GraphQLModule.forRoot({ // bu Graphql ni ishga tushuradi va schemani avtomatik yaratadi
      driver: ApolloDriver, 
      playground: true, 
      uploads: true,
      autoSchemaFile: true,
      formatError: (error: T) => {
        console.log("error", error);
        const graphQlFormatedError = {
          code: error?.extensions.code,
          message: 
          error?.extensions?.exception?.response?.message ||
          error?.extensions?.response?.message || error?.message,
        };
        console.log("GraphQl global Error", graphQlFormatedError);
        return graphQlFormatedError;
      }
    }), ComponentsModule, 
        DatabaseModule, SocketModule, 
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {} //modul decorator
