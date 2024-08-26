import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wifi } from './wifi.entity';
import { WifiController } from './wifi.controller';
import { WifiService } from './wifi.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wifi])],
  controllers: [WifiController],
  providers: [WifiService]
})
export class WifiModule { }
