import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => {
        const {
          MONGODB_HOST,
          MONGODB_PORT,
          MONGODB_DB,
          MONGODB_USER,
          MONGODB_PWD,
        } = process.env;
        return {
          uri: `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}`,
          user: MONGODB_USER,
          pass: MONGODB_PWD,
          // useFindAndModify: false,
          // useNewUrlParser: true,
          // useCreateIndex: true,
          // useUnifiedTopology: true
        };
      },
      inject: [ConfigService],
    }),

    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
