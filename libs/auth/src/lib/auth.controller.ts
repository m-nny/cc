import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  auth() {
    return {
      authenticated: true,
    };
  }

  @Post()
  authenticate(@Body() postData: { username: string; password: string }) {
    const { password, username } = postData;
    console.log({ username, password });
  }
}
