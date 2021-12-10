import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { PrismaService } from 'src/prisma.service';
  import { CrendentialsDto } from './dto/credentials.dto';
  import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class AuthService {
    constructor(private database: PrismaService, private jwt: JwtService) {}
  
    async login(logindata: CrendentialsDto) {
      const userExists = await this.database.user.findUnique({
        where: { email: logindata.email },
      });
  
      if (!userExists) {
        throw new NotFoundException('User not found');
      }
  
      const validPassword = await bcrypt.compare(
        logindata.password,
        userExists.password,
      );
  
      if (validPassword) {
        const enter = {
          email: userExists.email,
        };
  
        const token = await this.jwt.sign(enter);
  
        return { token };
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    }
  }