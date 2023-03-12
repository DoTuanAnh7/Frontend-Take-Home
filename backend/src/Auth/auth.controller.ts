import { Body, Controller, Get, Param, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/User/user.model';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  jwtService: any;
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('address') address: string,
    @Body('postcode') postcode: number,
    @Body('city') city: string,
    @Body('country') country: string,

  ) {
    const user = await this.authService.userService.findByEmail(email);
    if (user) {
      return { message: 'Email already exists' };
    }
    await this.authService.userService.Register(email, password, name, address, postcode, city, country);
    return { message: 'User created successfully' };
  }

  @Post('login')
  async login(@Body() user: any) {
    const userInfo = await this.authService.userService.findByEmail(user.email);
    
    return this.authService.login(user, userInfo);
  }
}