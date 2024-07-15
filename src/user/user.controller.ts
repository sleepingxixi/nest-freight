import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDTO } from './dto/login.dto';
import { AuthGuard } from './user.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post('login')
  login(@Body() loginUserDTO: LoginUserDTO) {
    return this.userService.signIn(loginUserDTO.userName, loginUserDTO.userPwd);
  }

  @UseGuards(AuthGuard)
  @Get('report')
  report() {
    return {
      driverCount: 278600,
      totalMoney: 3984200,
      orderCount: 1306000,
      cityNum: 80
    };
  }

  @Post('collect')
  collect(@Body('name') name: string, @Body('type') type: string) {
    console.log('name==', name, 'type==', type);
    return {
      name,
      type
    };
  }
}
