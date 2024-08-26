import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Wifi } from './equipment/wifi/wifi.entity';
import { WifiModule } from './equipment/wifi/wifi.module';
import { WifiController } from './equipment/wifi/wifi.controller';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath:
      //   process.env.NODE_ENV === 'production'
      //     ? '.production.env'
      //     : '.development.env'
      envFilePath: '.production.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [Wifi]
      // synchronize: true //shouldn't be used in production - otherwise you can lose production data.
    }),
    UserModule,
    WifiModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService]
})
export class AppModule { }
