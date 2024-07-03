import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(private jwtService: JwtService) {}

  async signIn(username, pass) {
    // const user = await this.usersService.findOne(username);
    // if (user?.password !== pass) {
    //   throw new UnauthorizedException();
    // }
    if (username === 'lpTest' && pass === 'sleeping123') {
      const payload = { id: 1, username };
      return {
        access_token: await this.jwtService.signAsync(payload)
      };
    } else {
      throw new HttpException('用户名或者密码错误', HttpStatus.OK);
    }
  }
}
