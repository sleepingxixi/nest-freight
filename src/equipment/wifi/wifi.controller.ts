import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/user/user.guard';
import { WifiDTO } from '../dto/equipment.dto';
import { WifiService } from './wifi.service';

@Controller('wifi')
export class WifiController {
  constructor(private readonly wifiService: WifiService) { }
  // 获取wifi列表
  @Get('getWifiList')
  report() {
    return this.wifiService.findAll();
  }

  // 编辑wifi
  @UseGuards(AuthGuard)
  @Post('editWifi')
  async editWifi(@Body() wifiData: WifiDTO) {
    console.log('data==', wifiData);
    const res = await this.wifiService.updateWifi(wifiData.id, {
      ...wifiData,
      updateTime: new Date().toString()
    });
    if (res && res.id) {
      return true;
    } else {
      return false;
    }
  }

  // 编辑wifi
  @UseGuards(AuthGuard)
  @Post('createWifi')
  async createWifi(@Body() wifiData: WifiDTO) {
    console.log('data==', wifiData);
    const res = await this.wifiService.createWifi({
      ...wifiData,
      isActive: true,
      createTime: new Date().toString(),
      updateTime: new Date().toString()
    });
    if (res && res.id) {
      return true;
    } else {
      return false;
    }
  }

  // 删除wifi
  // 编辑wifi
  @UseGuards(AuthGuard)
  @Post('deleteWifi')
  async deleteWifi(@Body() wifiList: number[]) {
    const res = await this.wifiService.batchDeleteWifi(wifiList);
    if (res && res.affected === wifiList.length) {
      return true;
    } else {
      return false;
    }
  }
}
